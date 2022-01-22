import React, { Component } from "react";
import styles from "../index.less";

import { Button } from "antd";
class GrandSon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "start",
    };
  }

  render() {
    console.log("孙组件---render---");
    const { id } = this.props;

    return (
      <div className={styles.grandson} ref={(v) => (this.ref11 = v)}>
        <p>{id || "孙组件"}</p>
        <Button danger>danger</Button>
      </div>
    );
  }
}

export default GrandSon;
