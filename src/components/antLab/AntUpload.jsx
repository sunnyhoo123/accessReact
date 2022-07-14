import React, { Component } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import CusUpload from "./components/upload/CusUpload";

import CusDropzone from "./components/upload/CusDropzone";
import CusUseDropzone from "./components/upload/CusUseDropzone";
import CusUseDropzone1 from "./components/upload/CusUseDropzone1";

class AntUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlList: [],
    };
  }

  beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      console.log(info, 666);
      info.fileList.forEach((item) => {
        this.getBase64(item.originFileObj, (imageUrl) => {
          const { imageUrlList } = this.state;
          imageUrlList.push(imageUrl);
          this.setState({
            imageUrlList,
            loading: false,
          });
        });
      });
    }
  };

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {
    const { imageUrlList } = this.state;
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
          {imageUrlList.map((i) => {
            return (
              <img src={i} alt="avatar" key={i} style={{ width: "100%" }} />
            );
          })}
          {uploadButton}
        </Upload>
        <CusUpload />
        <CusDropzone></CusDropzone>
        <CusUseDropzone></CusUseDropzone>
        <CusUseDropzone1></CusUseDropzone1>
      </div>
    );
  }
}

export default AntUpload;
