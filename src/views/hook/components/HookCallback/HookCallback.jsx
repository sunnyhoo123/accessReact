import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Tag } from "antd";
import Child from "./Child";

const HookCallback = (props) => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  const getCallbackNum = useCallback(() => {
    console.log("useCallback getNum");
    return Array.from({ length: count * 100 }, (v, i) => i).reduce(
      (a, b) => a + b
    );
  }, [count]);

  // const getNum = () => {
  //   console.log("getNum");
  //   return Array.from({ length: count * 100 }, (v, i) => i).reduce(
  //     (a, b) => a + b
  //   );
  // };

  return (
    <div>
      <Child getCallbackNum={getCallbackNum} />
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
};
export default HookCallback;
