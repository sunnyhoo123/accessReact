import { useState, useEffect, useMemo, useCallback, useRef } from "react";

// 获取上一轮的 props 或 state
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// callback ref 可以确保 即便子组件延迟显示被测量的节点
function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

const useCount = () => {
  const [count, setCount] = useState(0);

  const [increase, decrease] = useMemo(() => {
    const increase = () => {
      setCount(count + 1);
    };

    const decrease = () => {
      setCount(count - 1);
    };
    return [increase, decrease];
  }, [count]);

  return [count, increase, decrease];
};

// 通过 setState 回调，让函数不依赖外部变量。例如：
const useCount1 = () => {
  const [count, setCount] = useState(0);

  const [increase, decrease] = useMemo(() => {
    const increase = () => {
      setCount((latestCount) => latestCount + 1);
    };

    const decrease = () => {
      setCount((latestCount) => latestCount - 1);
    };
    return [increase, decrease];
  }, []); // 保持依赖数组为空，这样 increase 和 decrease 方法都只会被创建一次

  return [count, increase, decrease];
};

// 通过 ref 来保存可变变量。例如：
const useCount2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const [increase, decrease] = useMemo(() => {
    const increase = () => {
      setCount(countRef.current + 1);
    };

    const decrease = () => {
      setCount(countRef.current - 1);
    };
    return [increase, decrease];
  }, []); // 保持依赖数组为空，这样 increase 和 decrease 方法都只会被创建一次

  return [count, increase, decrease];
};

export { usePrevious, useClientRect, useCount, useCount1, useCount2 };
