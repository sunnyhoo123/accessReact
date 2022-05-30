import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Tag, Button } from "antd";

import Records from "./Records";

const EffectAndFunc = (props) => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  // 更新count, 影响num, 看一下useEffect的效果
  function update(params) {
    setUser({ name: "kaka" });
    // 注意：如果函数包括了外部(useEffect外层)数据（list）, 则要把函数放到useEffect参数里面去
    console.log(list);
  }

  // 更新count, 影响num, 看一下useEffect的效果
  function update2(params) {
    setCount(2);
    // 注意：如果函数包括了外部(useEffect外层)数据（list）, 则要把函数放到useEffect参数里面去
    console.log(list);
  }

  // const update = useCallback(() => {
  //   setUser({ name: "kaka" });
  //   // 如果函数包括了外部数据, 则要把函数放到useEffect参数里面去,否则可以不放
  //   console.log(list);
  // }, [list]);

  function updatePure(params) {
    setList([{ name: "jojo" }]);
  }

  // function add(params) {
  //   console.log(params);
  // }

  // useEffect使用外部函数
  // useEffect(() => {
  //   add("--0--");
  // }, [num]);

  // useEffect(() => {
  //   add("--1--");
  // }, [count]);

  useEffect(() => {
    update();
    console.log("++EffectAndFunc");
  }, [update]);

  useEffect(() => {
    update2();
    console.log("++EffectAndFunc");
  }, [update2]);

  // useEffect(() => {
  //   updateAPI();
  //   console.log("++updateAPI", count);
  // }, [count, updateAPI]);

  useEffect(() => {
    // updatePure();
    console.log("++EffectAndFunc");
  }, [count, num, user, list]);

  return (
    <div>
      <Tag color="volcano">{count}</Tag>
      <Button onClick={() => setCount(count + 1)}>update count</Button>
      <Tag color="volcano">{num}</Tag>
      <Button onClick={() => setNum(num + 1)}>update num</Button>
      {/* <Button onClick={update}>update states</Button> */}
      <Records></Records>
    </div>
  );
};

export default EffectAndFunc;
