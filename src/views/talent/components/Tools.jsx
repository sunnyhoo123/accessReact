import React, { Component } from "react";
import { Button } from "antd";

import { arrData, treeData } from "@common/mockArray";
class ClassRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  transformArrayToTree = () => {
    let arra = [];
    let curData = {};
    arrData.forEach((i) => {
      const findNode = (init, item) => {
        let child = init.find((a) => a.id === item.pid);
        let same = init.find((a) => a.pid === item.pid);
        curData = { ...item, children: [] };
        if (item.pid === 0) {
          init.push(curData);
          return;
        }
        if (child) {
          child.children.push(curData);
        } else if (same) {
          init.push(curData);
        } else {
          init.forEach((ii) => {
            findNode(ii.children, item);
          });
        }
      };
      findNode(arra, i);
    });
    console.log(arra, 999);
  };

  transformArrayToTree2 = () => {
    /**
     * 递归查找，获取children
     */
    const getChildren = (data, result, pid) => {
      for (const item of data) {
        if (item.pid === pid) {
          const newItem = { ...item, children: [] };
          result.push(newItem);
          getChildren(data, newItem.children, item.id);
        }
      }
    };

    /**
     * 转换方法
     */
    const arrayToTree = (data, pid) => {
      const result = [];
      getChildren(data, result, pid);
      return result;
    };

    let result = arrayToTree(arrData, 0);
    console.log(result);
  };

  transformArrayToTree3 = () => {
    let result = this.arrayToTree(arrData);
    console.log(result);
  };

  arrayToTree = (items) => {
    // 先把数据转成Map去存储
    // 之后遍历的同时借助对象的引用,直接从Map找对应的数据做存储
    const result = []; // 存放结果集
    const itemMap = {}; //

    // 先转成map存储
    for (const item of items) {
      itemMap[item.id] = { ...item, children: [] };
    }

    for (const item of items) {
      const id = item.id;
      const pid = item.pid;
      const treeItem = itemMap[id];
      if (pid === 0) {
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          };
        }
        itemMap[pid].children.push(treeItem);
      }
    }
    return result;
  };

  flatTree = () => {
    const flatter = (arr) => {
      while (arr.some(Array.isArray)) {
        arr = [].concat(...arr);
      }
      console.log(arr);
    };
    flatter(treeData);
  };

  render() {
    return (
      <>
        <Button onClick={this.transformArrayToTree}>ArrayToTree</Button>
        <Button onClick={this.transformArrayToTree2}>ArrayToTree2</Button>
        <Button onClick={this.transformArrayToTree3}>ArrayToTree3</Button>
        <Button onClick={this.flatTree} danger>
          TreeToArray
        </Button>
        <input type="color" />
      </>
    );
  }
}

export default ClassRoute;
