import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import SortableComponent from "@components/drag/reactSortableHoc/";
import VirtualListCom from "@components/drag/reactSortableHoc/virtual-list";
import DragHandleCom from "@components/drag/reactSortableHoc/dragHandle.jsx";
import Containment from "@components/Containment";
import SortAbleCom from "@components/drag/sortablejs/sortAble.jsx";
import TableWithSortableColumns from "@components/drag/reactSortableHoc/virtual-table-columns.js";
import Tools from "./components/Tools";
import LodashTool from "./components/LodashTool";

import { Button } from "antd";
import styles from "./index.less";
class TalentCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      resume: {
        name: "John",
      },
      type: "dom",
      isShowDrag: false,
    };
  }

  toBoil(path) {
    this.props.history.push({
      pathname: path,
    });
  }

  toGame = () => {
    const { resume } = this.state;
    this.props.history.push({
      pathname: "/ticTacToe",
      search: "?resume",
      state: resume,
    });
  };

  toList = () => {
    const { type, visible } = this.state;
    this.props.history.push(`/toDo?type=${type}`, { visible });
  };

  showDrag = () => {
    const { isShowDrag } = this.state;
    this.setState({
      isShowDrag: !isShowDrag,
    });
  };

  testApi = async () => {
    const data = { a: { name: "kaka", a1: { b: { age: 33 } } } };
    const response = await axios.get(
      "https://gank.io/api/v2/post/5e777432b8ea09cade05263f"
    );
    console.log(data?.a?.a1?.b?.age);
    console.log(response);
  };

  toPage = () => {
    this.props.history.push({
      pathname: `/classRoute/${3}`,
      search: "id=1",
      state: { fromSource: 1 },
    });
  };

  render() {
    const { type, isShowDrag } = this.state;
    return (
      <div className={styles.talentCom}>
        <section>
          <div>
            <button>
              <div>233</div>
            </button>
          </div>
        </section>
        <div className={styles.pageBody}>
          <Link
            to={{
              pathname: "/antLab",
              search: `?resume=${type}`,
            }}
          >
            使用react-router-dom中的Link
          </Link>
          <Containment></Containment>
          <Link to={encodeURIComponent("$$$%%%/1221()*)&*(&*())///sd)")}>
            路由特殊字符
          </Link>
          <Button onClick={this.testApi}>test Api</Button>
          <Button onClick={this.toBoil.bind(this, "/boil")}>摄氏度转换</Button>
          <Button onClick={this.toGame}>game:井字棋(tic-tac-toe)</Button>
          <Button onClick={this.toList}>todoList</Button>
          <Button onClick={this.toPage}>Class Route</Button>
          <Button onClick={this.showDrag}>show Drag</Button>
          <Tools />
          <LodashTool />
          {/* 拖拽排序组件 */}
          {isShowDrag && (
            <div>
              {/* 常用组件，拖拽排序 */}
              <SortableComponent></SortableComponent>
              <VirtualListCom></VirtualListCom>
              <DragHandleCom></DragHandleCom>
              {/* 可以左右+上下拖拽 */}
              <SortAbleCom></SortAbleCom>
              <TableWithSortableColumns></TableWithSortableColumns>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// 当组件被包裹在父组件中时，this.props.history.push没有效果，需要引用withRouter，或者父组件传history
export default withRouter(TalentCom);
