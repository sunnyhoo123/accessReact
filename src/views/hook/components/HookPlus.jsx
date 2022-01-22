import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useCount, useCount1, useCount2 } from "../usePlus";
import styles from "../index.less";
import { Tag, Button } from "antd";

const HookPlus = (props) => {
  const [count, increase] = useCount();
  const [count1, increase1] = useCount1();
  const [count2, increase2] = useCount2();

  // increase 被重新创建之后， useEffect 并不会再次执行，所以 useEffect 中取到的 increase 永远都是首次创建时的 increase
  useEffect(() => {
    const handleClick = () => {
      increase(); // 执行后 count 的值永远都是 1
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.hookApiWrap}>
      <Tag>{count}</Tag>
      <Tag>{count1}</Tag>
      <Tag>{count2}</Tag>
    </div>
  );
};

export default HookPlus;
