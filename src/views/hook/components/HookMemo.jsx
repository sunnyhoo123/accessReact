import React, { useState, useMemo, useCallback, useEffect } from "react";
import styles from "../index.less";
import { Tag } from "antd";

const HookMemo = (props) => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  function init() {
    console.log("init");
  }

  const getNum = useMemo(() => {
    console.log("getNum");
    return Array.from({ length: count * 100 }, (v, i) => i).reduce(
      (a, b) => a + b
    );
  }, [count]);

  // function getNum() {
  //   console.log("getNum");
  //   return Array.from({ length: count * 100 }, (v, i) => i).reduce(
  //     (a, b) => a + b
  //   );
  // }

  console.log("render");
  return (
    <div className={styles.hookApiWrap}>
      <h4>
        总和：{getNum} {val}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
};

export default HookMemo;
