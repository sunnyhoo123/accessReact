import React, { useState, Component } from "react";
import { Table, Switch, Radio, Form, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ActionItems from "./components/ActionItems";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    ellipsis: true,
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const AntTabltPlus = () => {
  const [rows, setRows] = useState("");
  const handleItem = () => {};

  return (
    <div id="antTablePlus" style={{ position: "relative", overflow: "hidden" }}>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, index) => {
          return {
            onMouseEnter: (event) => {
              setRows({
                vendor: record?.content?.self?.vendor,
                eventName: record?.content?.self?.name,
                version: record?.content?.self?.version,
              });
              let actions = document.getElementsByClassName(index)[0];
              actions.style.right = "0px";
              actions.style.zIndex = "1";
              // setNode(record);
              // setNodeRow(record);
            }, // 鼠标移入行
            onMouseLeave: (event) => {
              let actions = document.getElementsByClassName(index)[0];
              actions.style.right = "-187px";
            },
          };
        }}
      />
      {data.map((item, index) => (
        <ActionItems
          key={index}
          id={index}
          index={index}
          // node={node}
          // nodeRow={nodeRow}
          onChangeEvent={() => handleItem(item)}
          // rows={rows}
        />
      ))}
    </div>
  );
};

export default AntTabltPlus;
