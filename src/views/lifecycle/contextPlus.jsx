import React, { Component } from "react";

import Middle from "./components/contextPage/Middle";
import {
  ThemeContext,
  SizeContext,
} from "./components/contextPage/createContext";
import { Button } from "antd";

class contextPlus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dashed",
      size: "small",
    };
  }

  handleClick = () => {
    this.setState({
      theme: "yellow",
      size: "big",
    });
  };

  render() {
    const { theme, size } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        {/* 当出现多个Context的时候，只需要将Context.Provider 嵌套即可 */}
        <SizeContext.Provider value={size}>
          <Middle></Middle>
        </SizeContext.Provider>
        <Button onClick={this.handleClick}>更新Context的Provider值</Button>
      </ThemeContext.Provider>
    );
  }
}

export default contextPlus;
