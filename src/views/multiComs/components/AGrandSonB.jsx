import React, { PureComponent } from "react";

class AGrandSonB extends PureComponent {
  render() {
    // 修改为Component时会重复渲染，而PureComponent只渲染一次
    const { style } = this.props;
    // 父组件把 style 传给子组件，style 的值是不变的，但是每一次父更新的时候，子组件拿到的 props.style 都是新的，因此 子组件 会不必要的更新
    // 但是 父组件 中的 style 作为组件的属性初始化则不会更新
    console.log("AGrandSonB", style);
    return (
      <div>
        <span style={style}>AGrandSonB</span>
      </div>
    );
  }
}

export default AGrandSonB;
