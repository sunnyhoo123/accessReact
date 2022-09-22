import React, { Component } from "react";
import { Tabs } from "antd";
import { RiseOutlined } from "@ant-design/icons";

import classnames from "classnames";
import styles from "./index.less";
import "./index.css";
import ScssCom from "./components/ScssCom";

const { TabPane } = Tabs;
class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="less" key="1">
            <div className={styles.lessWrap}>
              <div className={classnames(styles.smallWidth, styles.bigHeigh)}>
                使用classnames
              </div>
              <RiseOutlined />
              <div className={`${styles.smallWidth} ${styles.bigHeigh}`}>
                多个classname
              </div>
              <div className={styles.pos}>定位</div>
              <div className="text-link">
                If, at any time, you have specific questions or concerns about
                the accessibility of any particular web page on the Website,
                then please contact us by e-mail at
                <a href="mailto:customercare@michaels.com">
                  {" "}
                  customercare@michaels.com
                </a>{" "}
                or by phone at <a href="tel:800-642-4235">800.642.4235</a>. If
                you do encounter an accessibility issue, then please be sure to
                specify the web page and nature of the issue, and we will make
                all reasonable efforts to make that page or the information
                contained therein accessible for you. Thanks for visiting.
              </div>
            </div>
          </TabPane>
          <TabPane tab="css" key="2">
            <div className="boxShadow">不使用style的css</div>
            <div className={styles.multipleSpan}>
              <i className="iconfont">&#xe63a;</i>
              <span className="iconfont icon-icon-test2"></span>
              <span className="iconfont">&#xe635;</span>
              <i
                className="iconfont"
                style={{ fontSize: "32px", verticalAlign: "bottom" }}
              >
                &#xe672;
              </i>
              <span name="center">站务中心</span>
              {/* css技巧：要隐藏一个DOM元素，不需要JavaScript。一个原生的HTML属性就足以隐藏。其效果类似于添加一个style display: none; */}
              <span hidden>其他</span>
            </div>
            <div className="boxShadow">不使用style的css</div>
          </TabPane>
          <TabPane tab="scss" key="3">
            <ScssCom />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Custom;
