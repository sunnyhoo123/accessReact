import React, { useState, useEffect, useRef } from "react";
const THRESHOLD = 15;

const SlidingWindowScrollHook = (props) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(THRESHOLD);
  const [observer, setObserver] = useState(null);
  const $bottomElement = useRef();
  const $topElement = useRef();

  useEffect(() => {
    intiateScrollObserver();
    return () => {
      resetObservation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);

  const intiateScrollObserver = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const Observer = new IntersectionObserver(callback, options);
    if ($topElement.current) {
      Observer.observe($topElement.current);
    }
    if ($bottomElement.current) {
      Observer.observe($bottomElement.current);
    }
    setObserver(Observer);
  };

  const callback = (entries, observer) => {
    entries.forEach((entry, index) => {
      const listLength = props.list.length;
      // Scroll Down
      if (entry.isIntersecting && entry.target.id === "bottom") {
        const maxStartIndex = listLength - 1 - THRESHOLD; // Maximum index value `start` can take
        const maxEndIndex = listLength - 1; // Maximum index value `end` can take
        const newEnd = end + 10 <= maxEndIndex ? end + 10 : maxEndIndex;
        const newStart = end - 5 <= maxStartIndex ? end - 5 : maxStartIndex;
        setStart(newStart);
        setEnd(newEnd);
      }
      // Scroll up
      if (entry.isIntersecting && entry.target.id === "top") {
        const newEnd =
          end === THRESHOLD
            ? THRESHOLD
            : end - 10 > THRESHOLD
            ? end - 10
            : THRESHOLD;
        let newStart = start === 0 ? 0 : start - 10 > 0 ? start - 10 : 0;
        setStart(newStart);
        setEnd(newEnd);
      }
    });
  };
  const resetObservation = () => {
    observer && observer.unobserve($bottomElement.current);
    observer && observer.unobserve($topElement.current);
  };

  const getReference = (index, isLastIndex) => {
    if (index === 0) return $topElement;
    if (isLastIndex) return $bottomElement;
    return null;
  };

  const { list, height } = props;
  const updatedList = list.slice(start, end);
  const lastIndex = updatedList.length - 1;

  return (
    <ul style={{ position: "relative" }}>
      {updatedList.map((item, index) => {
        const top = height * (index + start) + "px";
        const refVal = getReference(index, index === lastIndex);
        const id = index === 0 ? "top" : index === lastIndex ? "bottom" : "";
        return (
          <li
            className="li-card"
            key={item.key}
            style={{ top }}
            ref={refVal}
            id={id}
          >
            {item.value}
          </li>
        );
      })}
    </ul>
  );
};
export { SlidingWindowScrollHook };
