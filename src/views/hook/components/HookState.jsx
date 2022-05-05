import React, { useState, useMemo, useCallback, useEffect } from "react";
import styles from "../index.less";
import { Tag, Button } from "antd";

const HookState = (props) => {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function init() {
    console.log("init");
  }

  function alertNumber() {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的那个状态
      alert(number);
    }, 3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
      <Tag>You clicked {count} times</Tag>
      <Button onClick={() => setCount(count + 1)}>click me</Button>
    </>
  );
};

export default HookState;
