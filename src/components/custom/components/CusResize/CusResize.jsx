import React, { useEffect, useState, useRef } from "react";
import { Button } from "antd";

import "./CusResize.css";

const CusResize = () => {
  const firedNumRef = useRef(0);
  const recordWidthRef = useRef(0);

  // const [recordOldValue, setRecordOldValue] = useState({
  //   width: "0",
  //   height: "0",
  // });

  const [firedNum, setFiredNum] = useState(0);
  const [recordWidth, setRecordWidth] = useState(0);

  // 通过ref保存同步的数据，防止获取到落后的异步数据
  useEffect(() => {
    firedNumRef.current = firedNum;
    recordWidthRef.current = recordWidth;
  });

  useEffect(() => {
    let MutationObserver =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver;
    let element = document.querySelector(".resize-element");
    const observer = new MutationObserver((mutationList) => {
      // for (let mutation of mutationList) {
      //   console.log(mutation);
      // }
      let width = getComputedStyle(element).getPropertyValue("width");
      let height = getComputedStyle(element).getPropertyValue("height");
      console.log(width, recordWidthRef.current, height);
      if (width === recordWidthRef.current) return;

      // setRecordOldValue({
      //   width,
      //   height,
      // });
      setRecordWidth(width);

      const newFiredNum = firedNumRef.current;
      setFiredNum(newFiredNum + 1);
    });
    observer.observe(element, {
      attributes: true,
      attributeFilter: ["style"],
      attributeOldValue: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reset = () => {
    setFiredNum(0);
  };

  return (
    <div>
      <Button onClick={reset}>reset</Button>
      <div className="resize-element"></div>
      <div className="resize-record">触发了{firedNum}次resize事件。</div>
    </div>
  );
};

export default CusResize;
