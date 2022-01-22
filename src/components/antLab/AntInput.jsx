import React, { Component } from "react";
import { Input, Select, Space } from "antd";

const Search = Input.Search;
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);

const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

class AntInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const input = document.getElementsByName("put");
    // 阻止粘贴
    input[0].addEventListener("paste", function (e) {
      e.preventDefault();
    });
  }

  render() {
    return (
      <div>
        <Search maxLength={5}></Search>
        <Space direction="vertical">
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="mysite"
          />
        </Space>
        <input type="text" name="put" defaultValue="无法粘贴"></input>
      </div>
    );
  }
}

export default AntInput;
