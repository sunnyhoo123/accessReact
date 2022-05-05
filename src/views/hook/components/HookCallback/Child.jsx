import React, { useState, useMemo, useCallback, useEffect } from "react";

const Child = (props) => {
  const { getNum = () => {}, getCallbackNum } = props;
  console.log("useCallback child");
  // 没有缓存，由于每次都创建，memo 认为两次地址都不同，属于不同的函数，所以会触发 useEffect
  useEffect(() => {
    console.log("Child1----getNum", getNum);
  }, [getNum]);

  // 有缓存，memo 判定两次地址都相同，所以不触发 useEffect
  useEffect(() => {
    console.log("Child1----getCallbackNum", getCallbackNum);
  }, [getCallbackNum]);

  return (
    <h4>
      总--和：{getNum()} {getCallbackNum()}
    </h4>
  );
};

export default React.memo(Child);
