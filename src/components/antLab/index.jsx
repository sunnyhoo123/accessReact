import React, { Component } from 'react';
import { Button,Input } from 'antd'
import Dialog from './Dialog';

const Search = Input.Search
class antLab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {visible} = this.state;
    return (
      <div>
        <Search maxLength={5}></Search>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Dialog
          visible={visible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        ></Dialog>
      </div>
    );
  }
}

export default antLab;