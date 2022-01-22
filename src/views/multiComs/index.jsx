import React, { Component } from "react";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";
import { Button } from "antd";
import styles from "./index.less";

class MultiComs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picData: {
        a: {
          a1: 0,
        },
        b: {
          b1: 0,
        },
      },
    };
  }

  // 仅仅修改picData.a.a1, ChildB和AGrandSonB使用PureComponent时不会更新
  changeState = () => {
    this.setState(({ picData }) => ({
      picData: {
        ...picData,
        a: {
          a1: picData.a.a1 + 1,
        },
      },
    }));
  };

  // 改变了其引用，完全新建了一个b,会导致ChildB渲染
  changeState2 = () => {
    const { picData } = this.state;
    this.setState({
      picData: {
        a: {
          a1: picData.a.a1 + 1,
        },
        b: {
          b1: 0,
        },
      },
    });
  };

  render() {
    const { picData } = this.state;
    return (
      <div className={styles.parent}>
        <Button onClick={this.changeState}>修改picData.a.a1的值</Button>
        <Button onClick={this.changeState2}>修改picData.a.a1的值</Button>
        <ChildA AData={picData.a}></ChildA>
        <ChildB BData={picData.b}></ChildB>
      </div>
    );
  }
}

export default MultiComs;
