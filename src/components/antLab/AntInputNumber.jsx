import React, { useState } from "react";
import { InputNumber } from "antd";
import {
  InfoCircleOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";

const AntInputNumber = () => {
  return (
    <>
      <InputNumber prefix="￥" style={{ width: "100%" }} />
      <br />
      <br />
      <InputNumber
        addonBefore={<UserOutlined />}
        prefix="￥"
        style={{ width: "100%" }}
      />
      <br />
      <br />
      <InputNumber prefix="￥" disabled style={{ width: "100%" }} />
    </>
  );
};

export default AntInputNumber;
