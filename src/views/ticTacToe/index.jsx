import React, { Component } from 'react';
import Board from './components/Board'
import styles from './index.less'

// 井字棋游戏
class TicTacToe extends Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board></Board>
        </div>
        <div className={styles.gameInfo}>
          <div></div>
          <ol></ol>
        </div>
      </div>
    );
  }
}

export default TicTacToe;