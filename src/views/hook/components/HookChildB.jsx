import React, { useRef, useState, useEffect } from "react";
import { Button } from "antd";
import styles from "../index.less";

const HookChildB = ({ setList }) => {
  useEffect(() => {
    // return () => clearTimeout(fn)
  }, []);

  const childSetList = (type) => {
    console.log(type, 99);
    setList(type);
  };
  return (
    <div className={styles.hookWrap}>
      <Button onClick={() => childSetList(1)}>click 1</Button>
      <Button onClick={() => childSetList(2)}>click 2</Button>
    </div>
  );
};

export default HookChildB;
