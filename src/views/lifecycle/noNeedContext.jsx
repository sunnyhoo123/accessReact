import React, { Component } from "react";

import Page from "./components/page/Page";
import { Button, Popconfirm } from "antd";

class NoNeedContext extends Component {
  constructor(props) {
    console.log("父组件---constructor---");
    super(props);
    this.state = {
      id: "",
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      id: "99",
    });
  };

  render() {
    // 将组件自身当作props传递下去，这并不适用于每一个场景：这种将逻辑提升到组件树的更高层次来处理，会使得这些高层组件变得更复杂，并且会强行将低层组件适应这样的形式
    const userConfirm = (
      <Popconfirm
        title="Are you sure delete this task?"
        okText="Yes"
        cancelText="No"
      >
        <Button>Confirm</Button>
      </Popconfirm>
    );
    return (
      <div>
        <Page userLink={userConfirm} />
      </div>
    );
  }
}

export default NoNeedContext;
