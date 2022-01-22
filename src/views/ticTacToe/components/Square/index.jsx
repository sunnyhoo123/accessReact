import React, { Component } from 'react';
import styles from './index.less'

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  
  // handleClick = () => {
  //   this.setState({
  //     value: 'x'
  //   })
  // }

  render() {
    // const { value } = this.state;
    const { value, onClick } = this.props;
    return (
      <button
        className={styles.square}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}

export default Square;