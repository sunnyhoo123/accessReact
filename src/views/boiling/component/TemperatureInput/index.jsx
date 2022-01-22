import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }
  
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>当前输入的温度是{scaleNames[scale]}</legend>
        <input
          type='text'
          value={temperature}
          onChange={this.handleChange.bind(this)}
        ></input>
      </fieldset>
    );
  }
}

export default TemperatureInput;