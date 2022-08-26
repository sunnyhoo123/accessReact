import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { Tag, Button } from "antd";

const types = ["个人记录", "家属记录"];
const statusList = ["全部预约", "待支付", "已受理"];

export default function Records() {
  const [type, setType] = useState("个人记录");
  const [status, setStatus] = useState("全部预约");

  // const getData = () => {
  //   console.log(`获取最新列表，类型：${type}, 状态：${status},  ${Date.now()}`);
  // };

  // useEffect(() => {
  //   getData();
  // }, [type, status, getData]);

  // 类型更改，重置状态
  // useEffect(() => {
  //   setStatus("全部预约");
  // }, [type]);

  // 当状态或类型更改的时候拉取最新的数据
  useEffect(() => {
    // getData();
    console.log(`获取最新列表，类型：${type}, 状态：${status},  ${Date.now()}`);
  }, [type, status]);

  const changeType = (val) => {
    setType(val);
    changeType22();
  };

  const changeType22 = (val) => {
    setStatus("全部预约");
  };

  return (
    <div>
      <div>
        {types.map((val) => {
          return (
            <button
              style={{ color: val === type ? "red" : "black" }}
              key={val}
              onClick={() => changeType(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
      <div>
        {statusList.map((val) => {
          return (
            <button
              style={{ color: val === status ? "red" : "black" }}
              key={val}
              onClick={() => setStatus(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
}
