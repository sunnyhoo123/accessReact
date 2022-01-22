import React, { Component } from 'react';
import { BackTop } from 'antd'

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

class AntTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }
  
  render() {
    return (
      <div id='backTop'>
        <BackTop target={() => document.getElementById('backTop')}><div style={style}>UP</div></BackTop>
      </div>
    );
  }
}

export default AntTab;