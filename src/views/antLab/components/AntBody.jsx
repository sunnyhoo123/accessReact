import React, { Component } from "react";
import { Row, Col, Menu, Affix } from "antd";
import { Link } from "react-router-dom";
import { ExportOutlined } from "@ant-design/icons";
import { menuItems } from "@common/mockMenu";
import * as utils from "@common/utils/antdTool";
import { Route, Switch } from "react-router-dom";

// antd component
import AntForm from "@components/antLab/AntForm";
// import AntButton from '@components/antLab/AntButton';
import AntTab from "@components/antLab/AntTab";
import AntSelect from "@components/antLab/AntSelect";
import AntDialog from "@components/antLab/AntDialog";
import AntUpload from "@components/antLab/AntUpload";
import AntTable from "@components/antLab/AntTable";
import AntTag from "@components/antLab/AntTag";
import AntInput from "@components/antLab/AntInput";
import AntCollapse from "@components/antLab/AntCollapse";

// custom component
import Custom from "@components/custom";
import CusStyle from "@components/cusStyle";
import Cusele from "@components/cusEle";

// import styles from '../index.less';
import "../index.css";

const { SubMenu } = Menu;

function fileNameToPath(filename) {
  const snippets = filename
    .replace(/(\/index)?((\.zh-cn)|(\.en-us))?\.md$/i, "")
    .split("/");
  return snippets[snippets.length - 1];
}

const createdCom = [
  { path: "/antlab/cuscom-cn", component: Custom, exact: false },
  { path: "/antlab/cusstyle-cn", component: CusStyle, exact: false },
  { path: "/antlab/cusele-cn", component: Cusele, exact: false },
  { path: "/antlab/tabs-cn", component: AntTab, exact: true },
  { path: "/antlab/select-cn", component: AntSelect, exact: false },
  { path: "/antlab/dialog-cn", component: AntDialog, exact: false },
  { path: "/antlab/form-cn", component: AntForm, exact: false },
  { path: "/antlab/upload-cn", component: AntUpload, exact: false },
  { path: "/antlab/tag-cn", component: AntTag, exact: false },
  { path: "/antlab/collapse-cn", component: AntCollapse, exact: false },
  { path: "/antlab/input-cn", component: AntInput, exact: false },
  { path: "/antlab/table-cn", component: AntTable, exact: false },
];
class AntBody extends Component {
  state = {
    openKeys: undefined,
  };

  getMenuItems(footerNavIcons = {}) {
    return menuItems.map((menuItem) => {
      if (menuItem.title === "Overview" || menuItem.title === "组件总览") {
        return menuItem.children.map((leaf) =>
          this.generateMenuItem(false, leaf, footerNavIcons)
        );
      }
      if (menuItem.type === "type") {
        return (
          <Menu.ItemGroup title={menuItem.title} key={menuItem.title}>
            {menuItem.children
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((leaf) =>
                this.generateMenuItem(false, leaf, footerNavIcons)
              )}
          </Menu.ItemGroup>
        );
      }
      if (menuItem.children) {
        return (
          <SubMenu title={menuItem.title} key={menuItem.title}>
            {menuItem.children.map((child) => {
              if (child.type === "type") {
                return (
                  <Menu.ItemGroup title={child.title} key={child.title}>
                    {child.children.map((leaf) =>
                      this.generateMenuItem(false, leaf, footerNavIcons)
                    )}
                  </Menu.ItemGroup>
                );
              }
              return this.generateMenuItem(false, child, footerNavIcons);
            })}
          </SubMenu>
        );
      }
      return this.generateMenuItem(true, menuItem, footerNavIcons);
    });
  }

  generateMenuItem(isTop, item, { before = null, after = null }) {
    const key = fileNameToPath(item.filename);
    if (!item.title) {
      return null;
    }
    const title = item.title;
    const text = isTop
      ? title
      : [
          <span key="english">{title}</span>,
          <span className="chinese" key="chinese">
            {item.subtitle}
          </span>,
        ];
    const { disabled } = item;
    const url = item.filename
      .replace(/(\/index)?((\.zh-cn)|(\.en-us))?\.md$/i, "")
      .toLowerCase();
    let toUrl = utils.getLocalizedPathname(
      /^antLab/.test(url) ? `${url}/` : url,
      true,
      {}
    );

    const child = !item.link ? (
      <Link to={toUrl} disabled={disabled}>
        {before}
        {text}
        {after}
      </Link>
    ) : (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabled}
        className="menu-item-link-outside"
      >
        {before}
        {text} <ExportOutlined />
        {after}
      </a>
    );

    const comExists = createdCom.find((i) => i.path === toUrl.pathname);
    return (
      <Menu.Item key={key.toLowerCase()} disabled={!comExists}>
        {child}
      </Menu.Item>
    );
  }
  renderMainContent() {
    return (
      <>
        <Switch>
          {createdCom.map((c) => (
            <Route path={c.path} component={c.component} key={c.path} />
          ))}
          {/* <Route
            path="/developer-portal"
            render={() => history.push('/developer-api/develop-home')}
          /> */}
        </Switch>
      </>
    );
  }

  render() {
    const { openKeys } = this.state;
    const menuItems = this.getMenuItems();
    const menuChild = (
      <Menu
        inlineIndent={30}
        className="aside-container menu-site"
        mode="inline"
        openKeys={openKeys}
        // selectedKeys={[activeMenuItem]}
        onOpenChange={this.handleMenuOpenChange}
      >
        {menuItems}
      </Menu>
    );
    return (
      <div className="main-wrapper">
        <Row>
          <Col
            xxl={4}
            xl={5}
            lg={6}
            md={6}
            sm={24}
            xs={24}
            className="main-menu"
          >
            <Affix>
              <section className="main-menu-inner">{menuChild}</section>
            </Affix>
          </Col>
          <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
            <section>{this.renderMainContent()}</section>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AntBody;
