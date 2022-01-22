import React, { Component } from "react";

// import { Button } from "antd";
import styles from "../index.less";
import AGrandSonA from "./AGrandSonA";
import AGrandSonB from "./AGrandSonB";

// 将 父组件 中的 style 作为组件的属性初始化，而不是放在 render 里面，导致每一次 父组件 render 都赋值一次 style。像这样就可以避免 子组件 重渲染
const style = { width: "400px", height: "300px" };
class ChildA extends Component {
  constructor(props) {
    console.log("父组件---constructor---");
    super(props);
    this.state = {
      status: "start",
    };
  }

  render() {
    const { AData } = this.props;
    // const style = { width: "400px", height: "300px" };
    return (
      <div className={styles.child}>
        <span>ChildA</span>
        <AGrandSonA aData={AData.a1}></AGrandSonA>
        <AGrandSonB style={style}></AGrandSonB>
      </div>
    );
  }
}

export default ChildA;
