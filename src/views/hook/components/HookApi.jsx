import React from "react";
import styles from "../index.less";
import { Tag } from "antd";

const HookChild = ({ weather, weatherList }) => {
  function log(e) {
    console.log(e);
  }

  return (
    <div className={styles.hookApiWrap}>
      {weatherList.map((w) => (
        <div key={w.date}>{w.date}</div>
      ))}
      <Tag onClose={log}>props.air_tips{weather?.air_tips}</Tag>
    </div>
  );
};

export default HookChild;
