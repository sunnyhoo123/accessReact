import React, { Component } from 'react';
import { Modal } from 'antd'

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk() {
    this.props.handleOk();
  };

  handleCancel() {
    this.props.handleCancel();
  };

  render() {
    const {visible} = this.props;
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default Dialog;