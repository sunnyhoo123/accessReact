import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.less";

import HookChildB from "./components/HookChildB";
import _ from "lodash";
import axios from "axios";

const Parent = () => {
  const [typeList, setTypeList] = useState([]);
  const [randomNum, setRandom] = useState(0);

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
      <HookChildB setList={setList}></HookChildB>
    </div>
  );
};

export default Parent;
