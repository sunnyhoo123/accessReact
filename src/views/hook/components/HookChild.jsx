/* eslint-disable */
import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePrevious, useClientRect } from "../usePlus";
import { addTodo, savePage } from "@src/redux/actions";
import styles from "../index.less";
import { Tag } from "antd";

const HookChild = (props) => {
  console.log("child render...", props);

  // 如果useState的初始值是个对象，引用地址不变那么就不会更新
  // useState的初始值，只在第一次有效
  const [name, setName] = useState(() => props.staticObj.name);
  const [childVar, setChildVar] = useState(props.stateObj);

  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);
  const [rect, ref] = useClientRect();
  const counter = useSelector((state) => state.savePage);

  const dispatch = useDispatch();
  const changePage = useCallback(() => {
    const todo = {
      id: 100,
      text: "123",
      completed: false,
    };
    const page = { current: 2, pageSize: 30 };
    dispatch(addTodo(todo));
    dispatch(savePage(page));
  }, [dispatch]);

  const createRows = (count) => {
    console.log(count, "createRows***");
    return 1;
  };

  const createRowss = (count) => {
    // props?.onChange();
    console.log(count, "***createRows***");
    return 2;
  };

  // ⚠️ createRows() 每次渲染都会被调用
  const [rows, setRows] = useState(createRows(props.count));

  // ✅ createRows() 只会被调用一次
  const [rowss, setRowss] = useState(() => createRowss(props.count));

  function log(e) {
    console.log(e);
  }

  useEffect(() => {
    setChildVar(props.stateObj);
  }, [props.stateObj]);

  return (
    <div className={styles.childWrap}>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setRows(rows + 1)}>Click rows{rows}</button>
      <button onClick={() => setRowss(rowss + 1)}>Click rowss{rowss}</button>
      <button onClick={changePage}>changePage</button>
      <Tag onClose={log}>props.num{props.num}</Tag>
      <Tag onClose={log}>staticObj.name{props.staticObj.name}</Tag>
      <Tag onClose={log}>staticObj.age{props.staticObj.age}</Tag>
      <Tag onClose={log}>staticNum{props.staticNum}</Tag>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <>
        <h1 ref={ref}>
          {name} --- {props.data} -- {counter.pageSize}
          {childVar[0]}
          5555
        </h1>
        {rect !== null && (
          <h2>The above header is {Math.round(rect.height)}px tall</h2>
        )}
      </>
    </div>
  );
};

export default HookChild;
