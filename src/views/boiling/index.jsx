import React, { Component } from 'react';
import TemperatureInput from './component/TemperatureInput'
import BoilingVerdict from './component/BoilingVerdict'

class boiling extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }
  
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) +32;
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
      return ''
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature,
      scale: 'c'
    })
  }

  handleFahrenheit(temperature) {
    this.setState({
      temperature,
      scale: 'f'
    })
  }

  render() {
    const {scale,temperature} = this.state;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange = {this.handleCelsiusChange.bind(this)}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange = {this.handleFahrenheit.bind(this)}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        >
        </BoilingVerdict>
      </div>
    );
  }
}

export default boiling;