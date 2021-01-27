import React, { Component } from 'react';
import styles from './index.less';
import { Breadcrumb, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import SortableComponent from '@components/drag/reactSortableHoc/'
import VirtualListCom from '@components/drag/reactSortableHoc/virtual-list'
import DragHandleCom from '@components/drag/reactSortableHoc/dragHandle.jsx'
import Containment from '@components/Containment'
import SortAbleCom from '@components/drag/sortablejs/sortAble.jsx'
import TableWithSortableColumns from '@components/drag/reactSortableHoc/virtual-table-columns.js'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const BcItem = Breadcrumb.Item;
class TalentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      resume: {
        name: 'John'
      },
      type: 'dom'
    }
  }

  toBoil(path) {
    this.props.history.push({
      pathname: path
    })
  }

  toGame = () => {
    const { resume } = this.state;
    this.props.history.push({
      pathname: '/ticTacToe',
      search: '?resume',
      state: resume,
    })
  }

  toList = () => {
    const { type, visible } = this.state;
    this.props.history.push(`/toDo?type=${type}`, { visible })
  }

  render() {
    const { type } = this.state;
    return (
      <div className={styles.talentHome}>
        <div className={styles.pageHeader}>
          <Breadcrumb>
            <BcItem href="/">
              <HomeOutlined />
            </BcItem>
            <BcItem href="/antLab">
              <UserOutlined />
              <span>antLab</span>
            </BcItem>
            <BcItem>Application</BcItem>
          </Breadcrumb>
        </div>
        <div className={styles.pageBody}>
          <Link 
            to={{
              pathname: '/antLab',
              search: `?resume=${type}`
            }}
          >使用react-router-dom中的Link</Link>
          <Containment></Containment>
          {/* 常用组件，拖拽排序 */}
          <SortableComponent></SortableComponent>
          {/* <VirtualListCom></VirtualListCom> */}
          {/* <DragHandleCom></DragHandleCom> */}
          {/* 可以左右+上下拖拽 */}
          <SortAbleCom></SortAbleCom>
          {/* <TableWithSortableColumns></TableWithSortableColumns> */}
          
          <Button onClick={this.toBoil.bind(this, '/boil')}>摄氏度转换</Button>
          <Button onClick={this.toGame}>game:井字棋(tic-tac-toe)</Button>
          <Button onClick={this.toList}>todoList</Button>
        </div>
      </div>
    );
  }
}

// 当组件被包裹在父组件中时，this.props.history.push没有效果，需要引用withRouter，或者父组件传history
export default withRouter(TalentHome);