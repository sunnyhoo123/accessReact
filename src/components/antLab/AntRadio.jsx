import React from "react";
import { Radio } from "antd";

const AntRadio = () => {
  return (
    <>
      <Radio>Radio</Radio>
      <Radio.Group defaultValue="a" size="large">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </>
  );
};

export default AntRadio;
