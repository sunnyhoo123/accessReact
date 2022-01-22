import React, { Component } from "react";

import { ThemeContext, SizeContext } from "./createContext.js";

class ContextChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "start",
    };
  }

  componentDidMount() {
    console.log(ThemeContext.Consumer, this.context, 222);
  }
  // 这种方式只能拿到一个context
  static contextType = ThemeContext;
  static contextType = SizeContext;

  render() {
    const theme = this.context;
    return (
      <>
        <div>{theme}</div>
      </>
    );
  }
}
// ContextChild.contextType = ThemeContext;
export default ContextChild;
