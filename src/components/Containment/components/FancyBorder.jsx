import React, { Component } from 'react';
import '../index.css'

class FancyBorder extends Component {
  render() {
    const {color, children} = this.props;
    return (
      <div className={'FancyBorder FancyBorder-' + color}>
        {children}
      </div>
    );
  }
}

export default FancyBorder;