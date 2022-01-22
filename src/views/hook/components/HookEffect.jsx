import React, { useState, useMemo, useCallback, useEffect } from "react";
import styles from "../index.less";
import { Tag, Button } from "antd";

const HookEffect = (props) => {
  const [count, setCount] = useState(0);

  /**
   * useEffect 规则
   * 没有传第二个参数时，在每次 render 之后都会执行 useEffect中的内容
   * useEffect接受第二个参数来控制跳过执行，下次 render 后如果指定的值没有变化就不会执行
   * useEffect 是在 render 之后浏览器已经渲染结束才执行
   * useEffect 的第二个参数是可选的，类型是一个数组
   * 根据第二个参数的不同情况，useEffect具有不同作用
   */

  //  没有传第二个参数时，在每次 render 之后都会执行 useEffect中的内容
  useEffect(() => {
    console.log("---useEffect---");
    return () => {
      // 注意：effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次(如果没有第二个参数)
      console.log("---useEffect clear---");
    };
  });

  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
  useEffect(() => {
    console.log("***useEffect***");
    return () => {
      console.log("***useEffect clear***");
    };
  }, []);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>update count</Button>
    </div>
  );
};

export default HookEffect;
