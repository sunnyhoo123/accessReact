import React, { Component } from 'react';
import { Button } from 'antd';

class Child extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

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