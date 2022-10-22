import React, { Component } from "react";

import { Button } from "antd";
import styles from "../index.less";
import GrandSon from "./GrandSon";

class Child extends Component {
  constructor(props) {
    console.log("子组件---constructor---");
    super(props);
    this.state = {
      status: "start",
    };
  }

  componentWillMount() {
    console.log("子组件---componentWillMount---", this.state.status);
  }

  componentDidMount() {
    console.log("子组件---componentDidMount---", this.state.status);
  }

  componentWillReceiveProps(nextProps) {
    const obj = {
      propsLoc: this.props.location,
      nextPropsLoc: nextProps.location,
      propsHisLoc: this.props.history.location,
      nextPropsHisLoc: nextProps.history.location,
    };
    console.table(obj);
    console.log("子组件---componentWillReceiveProps---");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("子组件---shouldComponentUpdate---");
    if (this.props.id === nextProps.id) {
      return false;
    }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("子组件---componentWillUpdate---");
  }

  componentDidUpdate(prevProps, prevState) {
    const obj = {
      propsLoc: this.props.location,
      prevPropsLoc: prevProps.location,
      propsHisLoc: this.props.history.location,
      prevPropsHisLoc: prevProps.history.location,
    };
    console.table(obj);
    console.log("子组件---componentDidUpdate---");
  }

  componentWillUnmount() {
    console.log("子组件---componentWillUnmount---");
    clearInterval(this.timerID);
  }

  handleClick = (type) => {
    switch (type) {
      case 1:
        this.ref1.cur1 = "自定义字符";
        break;
      case 2:
        this.ref2.cur2 = "子元素";
        break;
      default:
        break;
    }
  };

  clickChild = () => {
    console.log("child");
    this.setState({
      status: "new",
    });
  };

  render() {
    console.log("子组件---render---");
    const { id } = this.props;
    const { status } = this.state;
    return (
      <div
        className={styles.child}
        ref={(v) => (this.ref1 = v)}
        onClick={() => this.clickChild()}
      >
        <p>{id || "子组件"}</p>
        <p>{status}</p>
        <Button onClick={() => this.handleClick(1)}>层一ref</Button>
        <div ref={(v) => (this.ref2 = v)}>
          <Button onClick={() => this.handleClick(2)}>层二ref</Button>
        </div>
        <GrandSon id={id} ref={(v) => (this.ref3 = v)}></GrandSon>
      </div>
    );
  }
}

export default Child;
