import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setMenu } from "@src/redux/actions";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  ClusterOutlined,
  RocketOutlined,
  TrophyOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

import TalentCom from "@views/talent";
import HookCom from "@views/hook";
import Lifecycle from "@views/lifecycle";
import MultiComs from "@views/multiComs";
import ChakraUI from "@views/chakraUI";
import UseUtils from "@views/useUtils";
import Upload from "@views/upload";

import styles from "./index.less";

const { Header, Sider, Content } = Layout;
const BcItem = Breadcrumb.Item;

const childCom = [
  { path: "/talentCom", component: TalentCom, exact: false },
  { path: "/hookCom", component: HookCom, exact: false },
  { path: "/lifecycle", component: Lifecycle, exact: false },
  { path: "/multiComs", component: MultiComs, exact: false },
  { path: "/chakraUI", component: ChakraUI, exact: false },
  { path: "/useUtils", component: UseUtils, exact: false },
  { path: "/upload", component: Upload, exact: false },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      content: <TalentCom></TalentCom>,
    };
  }

  componentDidMount() {
    const { activeMenu } = this.props;
    console.log(activeMenu, "curMenu");
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = ({ item, key, keyPath, domEvent }) => {
    // this.showCom(key);
    console.log(key, typeof key, 999);
    localStorage.setItem("reactActiveMenu", key);
    const { patchSetMenu } = this.props;
    patchSetMenu(key);
  };

  // showCom = (key) => {
  //   switch (key) {
  //     case "1":
  //       this.setState({
  //         content: <TalentCom></TalentCom>,
  //       });
  //       break;
  //     case "2":
  //       this.setState({
  //         content: <HookCom></HookCom>,
  //       });
  //       break;
  //     case "3":
  //       this.setState({
  //         content: <Lifecycle></Lifecycle>,
  //       });
  //       break;
  //     case "4":
  //       this.setState({
  //         content: <MultiComs></MultiComs>,
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  renderContent() {
    return (
      <>
        <Switch>
          {childCom.map((c) => (
            <Route path={c.path} component={c.component} key={c.path} />
          ))}
        </Switch>
      </>
    );
  }

  render() {
    const { content } = this.state;
    const { activeMenu } = this.props;
    const localActiveMenu = localStorage.getItem("reactActiveMenu");

    return (
      <Layout id="layout-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[localActiveMenu || "0"]}
            onClick={this.handleClick}
          >
            <Menu.Item key="0" icon={<UserOutlined />}>
              <Link to={"/talentCom"}>home</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              <Link to={"/hookCom"}>hook</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<HistoryOutlined />}>
              <Link to={"/lifecycle"}>生命周期</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ClusterOutlined />}>
              <Link to={"/multiComs"}>组件通信</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<RocketOutlined />}>
              <Link to={"/chakraUI"}>chakraUI</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<TrophyOutlined />}>
              <Link to={"/useUtils"}>Utils</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              <Link to={"/upload"}>Upload</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout}>
          <Header className={styles.homeHeader} style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
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
          </Header>
          <Content
            className={styles.siteLayoutBackground}
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.renderContent()}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state, props) => ({
  activeMenu: state.activeMenu,
});

const mapDispatchToProps = (dispatch) => {
  return {
    patchSetMenu: (menu) => {
      dispatch(setMenu(menu));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
