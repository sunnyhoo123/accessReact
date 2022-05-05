import React, { useState, useMemo, useCallback, useEffect } from "react";
import styles from "../index.less";
import { Tag } from "antd";

const HookMemo = (props) => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  function init() {
    console.log("init");
  }

  // 使用useMemo后，count作为依赖值传递进去，此时仅当count变化时才会重新执行getNum
  const getMemoNum = useMemo(() => {
    console.log("getMemoNum");
    return Array.from({ length: count * 100 }, (v, i) => i).reduce(
      (a, b) => a + b
    );
  }, [count]);

  const getNum = (() => {
    console.log("getNum");
    return Array.from({ length: count * 100 }, (v, i) => i).reduce(
      (a, b) => a + b
    );
  })();

  console.log("render");
  return (
    <div className={styles.hookApiWrap}>
      <h4>
        总和：{getNum} {getMemoNum} {val}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
};

export default HookMemo;
