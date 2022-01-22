import React, { Component } from "react";

import ContextChild from "./ContextChild";
import ConsumerChild from "./ConsumerChild";
import HookContext from "./HookContext";

class Middel extends Component {
  render() {
    return (
      <div>
        <HookContext></HookContext>
        <ContextChild></ContextChild>
        <ConsumerChild></ConsumerChild>
      </div>
    );
  }
}

export default Middel;
