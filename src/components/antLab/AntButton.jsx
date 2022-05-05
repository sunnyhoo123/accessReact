import React, { Component } from "react";
import { Button } from "antd";
class AntButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  alertType = () => {
    alert(document.getElementById("myButton").type);
  };

  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <button id="myButton" type="button" onClick={this.alertType}>
          原生按钮
        </button>
        <button
          id="myButton"
          type="button"
          onClick={this.alertType}
          style={{ padding: 4, border: "thin solid" }}
        >
          <span>点我!</span>
        </button>
      </div>
    );
  }
}

export default AntButton;
