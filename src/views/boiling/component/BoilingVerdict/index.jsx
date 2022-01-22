import React, { Component } from 'react';

class BoilingVerdict extends Component {
  render() {
    return (
      <div>
        {this.props.celsius >= 100 ? (<p>The water would boil.</p>) : (<p>The water would not boli.</p>)}
      </div>
    );
  }
}

export default BoilingVerdict;