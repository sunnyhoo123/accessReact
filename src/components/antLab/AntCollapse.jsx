import React, { Component } from "react";

import CusCollapse from "./components/CusCollapse";

import { Collapse } from "antd";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class AntCollapse extends Component {
  render() {
    return (
      <div>
        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <CusCollapse />
      </div>
    );
  }
}

export default AntCollapse;
