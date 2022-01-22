import React, { Component } from 'react';
import { Button } from 'antd';
class ClassRoute extends Component {

/*
  componentWillReceiveProps 中，
  nextProps.history.location与 this.props.history.location的值都是变化之后的
  componentDidUpdate 中，
  prevProps.history.location与 this.props.history.location的值也都是变化之后的
  注意：props.history.location是不可靠的，有时候它的值与我们预期的不同，容易出错，因此，推荐使用props.location
 */

  componentDidMount() {
    console.log(this.props.location)
    console.log(this.props.history.location)
    console.log(this.props.match.params) // 匹配动态路由参数
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.location)
    console.log(nextProps.location)

    console.log(this.props.history.location)
    console.log(nextProps.history.location)

    // nextProps.location vs this.props.location
    // nextProps.history.location  vs this.props.history.location
  }

  componentDidUpdate (prevProps) {
    console.log(this.props.location)
    console.log(prevProps.location)

    console.log(this.props.history.location)
    console.log(prevProps.history.location)
    // prevProps.location vs this.props.location
    // prevProps.history.location  vs this.props.history.location
  }

  toPage = () => {
    this.props.history.push({
      pathname: '/lifecycle',
      search:'id=1',
      state: { fromSource: 1 },
    })
  }

  render() {
    return (
      <div>
        classRoute
        <Button onClick={this.toPage}>跳转到生命周期</Button>
      </div>
    );
  }
}

export default ClassRoute;