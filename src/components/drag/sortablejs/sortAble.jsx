import React, {Component} from 'react';
import {
  Sortable,
} from 'sortablejs';
import styles from './index.less';

class SortAbleCom extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    const moveId = document.getElementById("listWithHandle");
    Sortable.create(moveId, {
      handle: '.glyphicon-move',
      animation: 150,
      // forceFallback: true, 无法排序则换此方式
    });
  }
  render() {
    return (
      // <div className="grid-box" ref={this.sortableGroupDecorator}>
      // {menus &&
      //   menus.map((item, i) => {
      //   return this.renderSelectedItemView(item, i);
      // })}
      // </div>
      <div id="listWithHandle" class={styles.listGroup}>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">1</span>
          Drag me by the handle
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">2</span>
          You can also select text
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">3</span>
          Best of both worlds!
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">4</span>
          Best of both worlds!
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">5</span>
          Best of both worlds!
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">6</span>
          Best of both worlds!
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">7</span>
          Best of both worlds!
        </div>
        <div class={styles.listGroupItem}>
          <span className="glyphicon glyphicon-move" aria-hidden="true">8</span>
          Best of both worlds!
        </div>
      </div>
    )
  }
}

export default SortAbleCom