import React, { Component } from "react";

import Cusinline from "./components/Cusinline";
import { Tabs } from "antd";

const { TabPane } = Tabs;
class Cusele extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  callback = (key) => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="inline" key="1">
            <Cusinline />
          </TabPane>
          <TabPane tab="Tab 2" key="2"></TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Cusele;
