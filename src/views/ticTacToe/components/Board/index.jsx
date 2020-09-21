import React, { Component } from 'react';
import Square from '../Square';
import styles from './index.less'
import utils from '@common/utils'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  
  renderSquare(i) {
    const { squares } = this.state;
    return (<Square
      value={squares[i]}
      onClick={() => this.handleClick(i)}
    ></Square>)
  }

  handleClick = (i) => {
    const { squares, xIsNext } = this.state;
    const newSquares = squares.slice();
    if(utils.calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      squares: newSquares,
      xIsNext: !xIsNext
    })
  }

  render() {
    const { squares, xIsNext } = this.state;
    const winner = utils.calculateWinner(squares);
    let status;
    if(winner) {
      status = "Winner: " + winner;
    }else {
      status = 'Next player: ' + (xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;