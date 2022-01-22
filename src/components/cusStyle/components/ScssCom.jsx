import React, { Component } from "react";
import styles from "../index.module.scss";
class ScssCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      ulList: ["Coffee", "Tea", "Coca Cola", "Coffee", "Tea", "Coca Cola"],
    };
  }

  render() {
    const { ulList } = this.state;
    return (
      <div className={styles.scsscom}>
        <div>
          <ul>
            {ulList.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
            {[<li key="11">1</li>, <li key="12">>2</li>]}
          </ul>
        </div>
      </div>
    );
  }
}

export default ScssCom;
