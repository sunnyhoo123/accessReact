import React, { Component } from 'react';
import Child from '@components/Child'
import { Button } from 'antd';

class Lifecycle extends Component {
  constructor(props) {
    console.log('父组件---constructor---')
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {
    console.log('父组件---componentWillMount---', this.state.date)
  }

  componentDidMount() {
    console.log('父组件---componentDidMount---', this.state.date)
    this.timerID = setInterval(() => this.tick, 1000);
  }

  componentWillReceiveProps(nextProps) {
    console.log('父组件---componentWillReceiveProps---')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('父组件---shouldComponentUpdate---')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('父组件---componentWillUpdate---')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('父组件---componentDidUpdate---')
  }

  componentWillUnmount() {
    console.log('父组件---componentWillUnmount---')
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleClick = () => {
    // 通过回调函数的方式获取子组件ref，可以得到子组件的信息，调用子组件方法
    this.getRef.handleClick();
    console.log(this.getRef)
  }

  render() {
    console.log('父组件---render---')
    return (
      <div>
        <Child ref={v => this.getRef = v}></Child>
        <Button onClick={this.handleClick}>getRef</Button>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Lifecycle;