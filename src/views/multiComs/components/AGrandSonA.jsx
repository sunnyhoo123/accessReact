import React, { Component } from "react";

// import { Button } from "antd";
import styles from "../index.less";

class AGrandSonA extends Component {
  render() {
    const { aData } = this.props;

    return (
      <div className={styles.child}>
        <span>AGrandSonA</span>
        <span>{aData}</span>
      </div>
    );
  }
}

export default AGrandSonA;
