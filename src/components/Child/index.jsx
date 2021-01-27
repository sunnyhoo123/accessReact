import React, { Component } from 'react';
import { Button } from 'antd';

class Child extends Component {
  constructor(props) {
    console.log('子组件---constructor---')
    super(props);
    this.state = {
      status: 'start'
    }
  }

  componentWillMount() {
    console.log('子组件---componentWillMount---', this.state.status)
  }

  componentDidMount() {
    console.log('子组件---componentDidMount---', this.state.status)
  }

  componentWillReceiveProps(nextProps) {
    console.log('子组件---componentWillReceiveProps---')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('子组件---shouldComponentUpdate---')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('子组件---componentWillUpdate---')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('子组件---componentDidUpdate---')
  }

  componentWillUnmount() {
    console.log('子组件---componentWillUnmount---')
    clearInterval(this.timerID);
  }

  handleClick = (type) => {
    switch (type) {
      case 1:
        this.ref1.cur1 = '父元素';
        break;
      case 2:
        this.ref2.cur2 = '子元素';
        break;
      default:
        break;
    }
  }
  render() {
    console.log('子组件---render---')
    return (
      <div ref={v => this.ref1 = v}>层一
        <Button onClick={() => this.handleClick(1)}>父元素</Button>
        <div ref={v => this.ref2 = v}>层二
          <Button onClick={() => this.handleClick(2)}>子元素</Button>
        </div>
      </div>
    );
  }
}

export default Child;