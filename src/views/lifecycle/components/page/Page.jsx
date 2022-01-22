import React, { Component } from "react";

import PageLayout from "./PageLayout";

class Page extends Component {
  constructor(props) {
    console.log("父组件---constructor---");
    super(props);
    this.state = {
      id: "",
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      id: "99",
    });
  };

  render() {
    const { userLink } = this.props;
    return (
      <div>
        <h3>No Need Context</h3>
        <PageLayout userLink={userLink} />
      </div>
    );
  }
}

export default Page;
