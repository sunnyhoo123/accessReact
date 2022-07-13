import React, { useState, useMemo, useCallback, Fragment } from "react";
import { Flex } from "@chakra-ui/react";

const WithPromise = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState("b");
  console.log("render");

  // 同步和异步情况下，连续执行两个 useState
  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA((a) => a + 1);
      setB("bb");
    });
  }

  function handleClickWithoutPromise() {
    setA((a) => a + 1);
    setB("bb");
  }

  // 同步和异步情况下，连续执行两次同一个 useState
  function handleClickWithPromise1() {
    Promise.resolve().then(() => {
      setA((a) => a + 1);
      setA((a) => a + 1);
    });
  }

  function handleClickWithoutPromise1() {
    setA((a) => a + 1);
    setA((a) => a + 1);
  }

  return (
    <Flex>
      <Fragment>
        <button onClick={handleClickWithPromise}>
          {a}-{b} 异步执行
        </button>
        <button onClick={handleClickWithoutPromise}>
          {a}-{b} 同步执行
        </button>
      </Fragment>
      <Fragment>
        <button onClick={handleClickWithPromise}>{a} 异步执行</button>
        <button onClick={handleClickWithoutPromise}>{a} 同步执行</button>
      </Fragment>
    </Flex>
  );
};

export default WithPromise;
