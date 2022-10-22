import React, { useState, useEffect, useRef } from "react";
import styles from "./index.less";
import { Button, Tag } from "antd";

import HookChildB from "./components/HookChildB";

const PROJECT_STATUS = Object.freeze({
  0: "New",
  1: "Pending",
  2: "Request Action",
  3: "Approved",
  4: "Denied",
  5: "Pending Review",
  6: "Prohibited",
});

const Parent = () => {
  const [typeList, setTypeList] = useState([{ type: 3 }]);
  const [randomNum, setRandom] = useState(0);

  const existing = [];

  const setList = (type) => {
    console.log(type, 44);

    if (type === 1) {
      typeList.push({ type: 1 });
    } else {
      typeList[0].type = 2;
    }
    console.log(typeList, 99999);
    setTypeList([...typeList]);
    setRandom(23);
  };
  console.log(typeList, 77777);

  useEffect(() => {
    console.log("update parent useEffect");
  }, [randomNum]);

  const handleParent = (val) => {
    setRandom(val);
  };

  return (
    <div className={styles.hookWrap}>
      <HookChildB setList={setList} existing={existing}></HookChildB>
      <Button onClick={() => handleParent(1)}>click 1</Button>
      <Button onClick={() => setRandom(1)}>setRandom</Button>
    </div>
  );
};

export default Parent;
