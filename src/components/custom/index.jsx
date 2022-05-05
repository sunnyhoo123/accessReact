import React, { Component } from "react";
import { Button, Tabs } from "antd";

import CusDialog from "./components/CusDialog";
import CusTable from "./components/CusTable";
import CusScrollNum from "./components/CusScrollNum";
import CusInput from "./components/CusInput";
import CusFlip from "./components/CusFlip/CusFlip";

import "./index.css";

const { TabPane } = Tabs;
class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      scrollNum: 0,
      scrollNumList: [8, 8, 6],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  changeNum = () => {
    let { scrollNumList } = this.state;
    let temp = scrollNumList.map((i) => (i < 9 ? i + 1 : (i = 0)));
    this.setState({
      scrollNumList: temp,
    });
  };

  render() {
    const { visible, scrollNumList } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="5" onChange={this.callback}>
          <TabPane tab="table" key="1">
            <CusTable />
          </TabPane>
          <TabPane tab="dialog" key="2">
            <CusDialog
              visible={visible}
              handleOk={this.handleOk}
              handleCancel={this.handleCancel}
            />
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
          </TabPane>
          <TabPane tab="scrollNum" key="3">
            <Button onClick={this.changeNum}>changeNum</Button>
            <ul style={{ display: "flex" }}>
              {scrollNumList.map((s, idx) => (
                <CusScrollNum
                  i={s}
                  blur={2}
                  delay={idx + 1}
                  key={idx}
                  className="num"
                />
              ))}
            </ul>
          </TabPane>
          <TabPane tab="input" key="4">
            <CusInput />
          </TabPane>
          <TabPane tab="flip" key="5">
            <CusFlip />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Custom;
