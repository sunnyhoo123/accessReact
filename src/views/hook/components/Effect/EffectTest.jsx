import React, { useState, useEffect, useCallback } from "react";
import { Button } from "antd";

const EffectTest = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 在useEffect中set值,会死循环
    // setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>update count</Button>
    </>
  );
};

export default EffectTest;
