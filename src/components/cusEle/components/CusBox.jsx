import React, { useState, useCallback, useEffect } from "react";
import { Tag } from "antd";
import styles from "./index.less";

const outer = {
  background: "#F6F6F6",
  minHeight: "100vh",
  width: "200px",
};

const middle = {
  background: "#dbb8b8",
  height: 24,
};

const inner = {};

const CusBox = (props) => {
  return (
    <div style={outer}>
      <div style={middle}>
        <div style={inner}>inner</div>
        <div style={inner}>inner</div>
        <div style={inner}>inner</div>
      </div>
    </div>
  );
};

export default CusBox;
