import React, { Component } from 'react';
import styles from './index.less';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const BcItem = Breadcrumb.Item;
class TalentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  render() {
    return (
      <div>
        <div className={styles.pageHeader}>
          <Breadcrumb>
            <BcItem href="/">
              <HomeOutlined />
            </BcItem>
            <BcItem href="/antLab">
              <UserOutlined />
              <span>antLab</span>
            </BcItem>
            <BcItem>Application</BcItem>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}

export default TalentHome;