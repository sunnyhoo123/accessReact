import React from "react";
import { Space, Card } from "antd";

const AntSpace = () => {
  return (
    <>
      <Space direction="vertical">
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <Space>
        Space
        <div>D1</div>
        <div>D2</div>
      </Space>
    </>
  );
};

export default AntSpace;
