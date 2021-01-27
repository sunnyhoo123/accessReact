import React, { Component } from 'react';
import FancyBorder from './FancyBorder'
import '../index.css'

class Dialog extends Component {
  render() {
    const { title, message, children } = this.props;
    return (
      <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {title}
      </h1>
      <p className="Dialog-message">
        {message}
      </p>
      {children}
    </FancyBorder>
    );
  }
}

export default Dialog;