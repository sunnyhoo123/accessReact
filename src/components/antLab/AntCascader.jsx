import React from "react";

import { Cascader, Divider } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const AntCascader = () => {
  function dropdownRender(menus) {
    return (
      <div>
        {menus}
        <Divider style={{ margin: 0 }} />
        <div style={{ padding: 8 }}>The footer is not very short.</div>
      </div>
    );
  }

  return (
    <Cascader
      options={options}
      dropdownRender={dropdownRender}
      placeholder="Please select"
    />
  );
};

export default AntCascader;
