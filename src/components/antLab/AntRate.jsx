import React from "react";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const AntRate = () => {
  return (
    <>
      <Rate />
      <br />
      <Rate defaultValue={2} character={({ index }) => index + 1} />
      <br />
      <Rate
        defaultValue={3}
        character={({ index }) => customIcons[index + 1]}
      />
    </>
  );
};

export default AntRate;
