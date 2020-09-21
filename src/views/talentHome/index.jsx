import React, { Component } from 'react';
import styles from './index.less';
import { Breadcrumb, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Lifecycle from '@views/lifecycle'

const BcItem = Breadcrumb.Item;
class TalentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  handleClick = (path)=> {
    this.props.history.push({
      pathname: path
    })
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
        <Lifecycle></Lifecycle>
        <Button onClick={this.handleClick.bind(this, '/boil')}>摄氏度转换</Button>
        <Button onClick={() => this.handleClick('/ticTacToe')}>game:井字棋(tic-tac-toe)</Button>
      </div>
    );
  }
}

export default TalentHome;