import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.less";

import HookChildB from "./components/HookChildB";
import _ from "lodash";
import axios from "axios";

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
  const [typeList, setTypeList] = useState([]);
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
  };
  console.log(typeList, 77777);

  return (
    <div className={styles.hookWrap}>
      <HookChildB setList={setList} existing={existing}></HookChildB>
    </div>
  );
};

export default Parent;
