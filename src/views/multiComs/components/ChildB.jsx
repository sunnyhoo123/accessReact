import React, { PureComponent } from "react";
class ChildB extends PureComponent {
  render() {
    const { BData } = this.props;
    // 修改为Component时会重复渲染，PureComponent只渲染一次
    console.log("ChildB");
    return (
      <div>
        <span>ChildB</span>
        <span>{BData.b1}</span>
      </div>
    );
  }
}

export default ChildB;
