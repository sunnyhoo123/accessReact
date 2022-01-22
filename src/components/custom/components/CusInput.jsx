import React, { Component } from "react";
import { Select, Input, Space } from "antd";

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

class CusInput extends Component {
  componentDidMount() {
    const input = document.getElementsByName("put");
    input[0].addEventListener("paste", function (e) {
      e.preventDefault();
    });
  }

  render() {
    return (
      <div>
        <Space direction="vertical">
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="mysite"
          />
        </Space>
        {/* 此input无法粘贴 */}
        <input type="text" name="put" defaultValue="无法粘贴"></input>
      </div>
    );
  }
}

export default CusInput;
