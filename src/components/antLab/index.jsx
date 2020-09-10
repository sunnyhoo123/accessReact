import React, { Component } from 'react';
import { Button, Input, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Dialog from './Dialog';
import AntSelect from './AntSelect';
import AntForm from './AntForm';
import './index.css';
import styles from './index.less';
import classnames from 'classnames';

const Search = Input.Search
class antLab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      imageUrlList: []
    }
  }

  componentDidMount() {
    const routeParams = this.props.history.location
    console.log(routeParams, 'routeParams')
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

  beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log(info,666)
      info.fileList.forEach(item => {
        this.getBase64(item.originFileObj, imageUrl =>
          {
            const {imageUrlList} = this.state;
            imageUrlList.push(imageUrl)
            this.setState({
              imageUrlList,
              loading: false,
            });
          }
        );
      })
      
    }
  };

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleClick = () => {
    this.selectItem.preview()
  }
  render() {
    const {visible,imageUrlList} = this.state;
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Upload
          multiple
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={this.beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrlList.map(i => {
            return <img src={i} alt="avatar" key={i} style={{ width: '100%' }} />
          })}
          { uploadButton }
        </Upload>
        <Search maxLength={5}></Search>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Button type="primary" onClick={this.handleClick}>
          调用子组件select中的方法
        </Button>
        <div className={'boxShadow'}>不使用style的css</div>
        <div className={classnames(styles.smallWidth, styles.bigHeigh)}>使用classnames</div>
        <div className={`${styles.smallWidth} ${styles.bigHeigh}`}>多个classname</div>
        <AntSelect
          ref = {(e) => this.selectItem = e}
        ></AntSelect>
        <AntForm></AntForm>
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