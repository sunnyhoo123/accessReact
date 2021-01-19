export default {
  // 井字期计算赢家
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    };
    return null;
  },

  getUUID(length = 16) {
    const initValue = Array.from('0123456789abcdefghijklmnopqrstuvwxyz');
    if(isNaN(length)) {
      return ''
    }
    if(length > initValue.length) {
      return ''
    }
    const temp = [];
    for(let i = 0;i < length; i++) {
      const index = Math.round(Math.floor(Math.random() * (length -1)));
      if(!(index < 0)){
        temp.push(initValue[index]);
      }
    }
    const uuid = temp.join('')
    return uuid;
  }
}
