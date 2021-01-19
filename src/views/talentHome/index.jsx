import React, { Component } from 'react';
import styles from './index.less';
import { Breadcrumb, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Lifecycle from '@views/lifecycle'
import SortableComponent from '@components/drag/reactSortableHoc/'
import VirtualListCom from '@components/drag/reactSortableHoc/virtual-list'
import DragHandleCom from '@components/drag/reactSortableHoc/dragHandle.jsx'
import SortAbleCom from '@components/drag/sortablejs/sortAble.jsx'
import TableWithSortableColumns from '@components/drag/reactSortableHoc/virtual-table-columns.js'

const BcItem = Breadcrumb.Item;
class TalentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  handleClick = (path)=> {
    this.props.history.push({
      pathname: path
    })
  }

  render() {
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
          <Lifecycle></Lifecycle>
          {/* <SortableComponent></SortableComponent> */}
          {/* <VirtualListCom></VirtualListCom> */}
          {/* <DragHandleCom></DragHandleCom> */}
          <SortAbleCom></SortAbleCom>
          {/* <TableWithSortableColumns></TableWithSortableColumns> */}
          
          <Button onClick={this.handleClick.bind(this, '/boil')}>摄氏度转换</Button>
          <Button onClick={() => this.handleClick('/ticTacToe')}>game:井字棋(tic-tac-toe)</Button>
        </div>
      </div>
    );
  }
}

export default TalentHome;