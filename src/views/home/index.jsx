import React, { Component } from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import TalentHome from '@views/talentHome';
import HookCom from '@views/hook';

const { Header, Sider, Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      content: null
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = ({ item, key, keyPath, domEvent }) => {
    this.showCom(key)
  }

  showCom = (key) => {
    switch (key) {
      case '1':
        this.setState({
          content: <TalentHome></TalentHome>
        })
        break;
      case '2':
        this.setState({
          content: <HookCom></HookCom>
        })
        break;
      case '3':
        this.setState({
          content: <TalentHome></TalentHome>
        })
        break;
      default:
        break;
    }
  }

  render() {
    const { content } = this.state;
    return (
      <Layout id='layout-custom-trigger'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout}>
          <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className={styles.siteLayoutBackground}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {content}
            {/* { this.showCom } */}
            {/* <TalentHome></TalentHome> */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;