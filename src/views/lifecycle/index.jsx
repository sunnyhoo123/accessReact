import React, { Component } from "react";
import { withRouter } from "react-router";

import Child from "./components/Child";
import { Button } from "antd";

import styles from "./index.less";
import NoNeedContext from "./noNeedContext";
import ContextPlus from "./contextPlus";

class Lifecycle extends Component {
  constructor(props) {
    console.log("父组件---constructor---");
    super(props);
    this.state = {
      id: "",
      count: 0,
      date: new Date(),
      showBorder: false,
    };
  }

  componentWillMount() {
    console.log("父组件---componentWillMount---", this.state.date);
  }

  componentDidMount() {
    console.log("父组件---componentDidMount---", this.state.date);
    // 更改网页标题
    // document.title = `You clicked ${this.state.count} times`;
    this.timerID = setInterval(() => this.tick, 1000);
    // this.setState({
    //   id: 99
    // })
  }

  componentWillReceiveProps(nextProps) {
    console.log("父组件---componentWillReceiveProps---");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("父组件---shouldComponentUpdate---");
    // if (this.props.id === nextProps.id) {
    //   return false
    // }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("父组件---componentWillUpdate---");
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `clicked ${this.state.count} times a`;
    console.log("父组件---componentDidUpdate---");
  }

  componentWillUnmount() {
    console.log("父组件---componentWillUnmount---");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  getRef = () => {
    // 通过回调函数的方式获取子组件ref，可以得到子组件的信息，调用子组件方法
    // const ref = this.pRef.handleClick();
    const ref = this.pRef;
    // ref.handleClick();
    ref.clickChild();
    console.log(ref);
  };

  updateState = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      id: "99",
    });
  };

  showBorder = () => {
    const { showBorder } = this.state;
    const ref = this.getRef;

    this.setState(
      {
        showBorder: !showBorder,
      },
      () => {
        const { showBorder } = this.state;
        ref.ref1.style.border = showBorder ? "4px solid slateblue" : "";
        ref.ref3.ref11.style.border = showBorder ? "4px solid salmon" : "";
      }
    );
  };

  render() {
    const { id, count, showBorder } = this.state;
    console.log("父组件---render---");
    const parentStyle = {
      border: "4px solid cyan",
    };
    return (
      <div className={styles.parent} style={showBorder ? parentStyle : {}}>
        <Child {...this.props} id={id} ref={(v) => (this.pRef = v)}></Child>
        <Button onClick={this.getRef}>getRef</Button>
        <Button onClick={this.updateState}>update state</Button>
        <Button onClick={this.showBorder}>边框</Button>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
        <ContextPlus></ContextPlus>
        <NoNeedContext></NoNeedContext>
      </div>
    );
  }
}

export default withRouter(Lifecycle);
