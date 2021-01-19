import React, { Component } from 'react';
import { Modal } from 'antd'
import DThree from '@components/D3'
class Dialog extends Component {
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

  handleOk = () => {
    this.props.handleOk();
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    const {visible} = this.props;
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          width="100%"
          footer={null}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <DThree></DThree>
        </Modal>
      </div>
    );
  }
}

export default Dialog;