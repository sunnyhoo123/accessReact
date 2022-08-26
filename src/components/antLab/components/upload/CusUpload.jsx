import React, { Component } from "react";

class CusUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlList: [],
      imgUrl: "",
    };
  }

  uploadFile = (img, val) => {
    const file = img.target.files[0];
    console.log(img, file, val);

    const URL1 = URL.createObjectURL(file);
    this.setState({
      imgUrl: URL1,
    });
  };

  uploadFile22 = (img, val) => {
    const file = img.target.files[0];
    console.log(img, file, val);

    const URL1 = URL.createObjectURL(file);
    this.setState({
      imgUrl: URL1,
    });
  };

  render() {
    return (
      <div>
        <input
          id="uploadFile"
          type="file"
          accept="image/*"
          onChange={this.uploadFile22}
        />
        <button id="submit" onClick={this.uploadFile}>
          自定义上传文件
        </button>
        <img src={this.state.imgUrl} alt="3333"></img>
      </div>
    );
  }
}

export default CusUpload;
