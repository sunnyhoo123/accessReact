import React, { Component } from "react";

class CusUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlList: [],
    };
  }

  uploadFile = (img, val) => {
    console.log(img, val);
  };

  render() {
    return (
      <div>
        <input id="uploadFile" type="file" accept="image/*" />
        <button id="submit" onClick={this.uploadFile}>
          上传文件
        </button>
      </div>
    );
  }
}

export default CusUpload;
