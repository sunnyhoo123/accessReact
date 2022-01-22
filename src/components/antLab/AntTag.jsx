import React, { Component } from "react";
import { Tag } from "antd";
class AntTag extends Component {
  render() {
    return (
      <div>
        <Tag closable color="#F2F3F5">
          123tag
          <span>numResultsByRating</span>
        </Tag>
        <Tag color="#f50">#f50</Tag>
        <Tag color="blue">blue</Tag>
      </div>
    );
  }
}

export default AntTag;
