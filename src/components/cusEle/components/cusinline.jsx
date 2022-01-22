import React, { Component } from "react";
import pet1 from "@assets/images/pet1.jpeg";
import style from "../index.less";
class Cusinline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      ulList: ["Coffee", "Tea", "Coca Cola", "Coffee", "Tea", "Coca Cola"],
      spanText: "x-baseline",
    };
  }

  handleClick = () => {
    const { visible } = this.state;
    this.setState({
      spanText: visible ? "" : "x-baseline",
      visible: !visible,
    });
  };
  render() {
    const { ulList, spanText } = this.state;
    return (
      <div className={style.inlineWrap}>
        {/* 样式解决：img底部多出空格的问题 */}
        <div className={style.demoWrap}>
          <img className={style.demoImg} src={pet1} alt="" />
          <span>xyz123中文</span>
        </div>
        <ul className={style.ulWrap}>
          {ulList.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
          <li>Coffee</li>&nbsp;
          <li>Tea</li>&nbsp;
          <li>Coca Cola</li>
          <li>Tea</li>&nbsp;
          <li>Coca Cola</li>
          <li>Tea</li>&nbsp;
          <li>Coca Cola</li>
        </ul>
        <span className={style.dibBaseline}></span>
        <span className={style.dibBaseline} onClick={this.handleClick}>
          {spanText}
        </span>
      </div>
    );
  }
}

export default Cusinline;
