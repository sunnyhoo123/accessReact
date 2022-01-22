import React, { Component } from 'react';
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons';

import AntBody from './components/AntBody';

import styles from './index.less';

const BcItem = Breadcrumb.Item;
class antLab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
    }
  }

  componentDidMount() {
    const routeParams = this.props.history.location;
    const routeParams2 = this.props.location;
    console.log(routeParams, routeParams2, 'routeParams')
  }

  render() {
    return (
      <div className={styles.antWrap}>
        <div className={styles.pageHeader}>
          <Breadcrumb>
            <BcItem href="/">
              <HomeOutlined />
            </BcItem>
            <BcItem>antLab</BcItem>
          </Breadcrumb>
        </div>
        <AntBody></AntBody>
      </div>
    );
  }
}

export default antLab;