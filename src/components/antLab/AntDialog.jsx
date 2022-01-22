import React, { Component } from 'react';
import { Tabs } from 'antd'

const { TabPane } = Tabs;

class AntDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }
  
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Tab 1
          </TabPane>
          <TabPane tab="Tab 2" disabled key="2">
            Tab 2weew
          </TabPane>
          <TabPane tab="Tab 23233" key="3">
            Tab 3eeee
          </TabPane>
        </Tabs>
        
      </div>
    );
  }
}

export default AntDialog;