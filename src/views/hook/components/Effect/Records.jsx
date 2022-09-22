import React, { useEffect, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

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
    // setType(val);
    // setStatus("全部预约");

    // 注意：React不会将异步代码里面的多次状态更新进行合并。 比如常见的setTimeout,Promise等等这些异步操作
    // Promise.resolve().then(() => {
    //   setType(val);
    //   setStatus("全部预约");
    // });

    // 注意：为了解决异步批量更新状态引起的问题，react提供了一个临时的api unstable_batchedUpdates 进行批量更新
    Promise.resolve().then(() => {
      unstable_batchedUpdates(() => {
        setType(val);
        setStatus("全部预约");
      });
    });
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
