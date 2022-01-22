import React, { Component } from "react";

import { ThemeContext, SizeContext } from "./createContext.js";

class ConsumerChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "start",
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(theme) => (
            <SizeContext.Consumer>
              {(size) => (
                <h1>
                  ThemeContext 的 值为 {theme}; SizeContext 的值为 {size}
                </h1>
              )}
            </SizeContext.Consumer>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default ConsumerChild;
