import React, { Component } from "react";
import { Space } from "antd";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

class AntIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  alertType = () => {
    alert(document.getElementById("myButton").type);
  };

  render() {
    return (
      <Space>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </Space>
    );
  }
}

export default AntIcon;
