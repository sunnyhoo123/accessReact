import React, { Component } from "react";

import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      count: 0,
    };
  }

  render() {
    const { userLink } = this.props;
    return (
      <div>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
        {userLink}
      </div>
    );
  }
}

export default PageLayout;
