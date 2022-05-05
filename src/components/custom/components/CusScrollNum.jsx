import React, { Component } from "react";
import "../index.css";

const ua = navigator.userAgent.toLowerCase();
const testUA = (regexp) => regexp.test(ua);

const isSafari = testUA(/safari/g) && !testUA(/chrome/g);

class CusScrollNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      showAnimate: true,
    };
  }
  componentDidMount() {
    console.log(isSafari);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.i !== this.props.i) {
      this.setState({
        showAnimate: true,
      });
    }
  }

  render() {
    const { i, delay, blur } = this.props;
    let { showAnimate } = this.state;
    return (
      <li
        className="scroll-num border-animate num"
        style={{ "--i": i, "--delay": delay }}
        onAnimationEnd={() => {
          this.setState({
            showAnimate: false,
          });
        }}
      >
        <ul ref="ul" className={showAnimate ? "animate" : ""}>
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>0</li>
        </ul>
        <svg width="0" height="0">
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation={`0 ${blur}`} />
          </filter>
        </svg>
      </li>
    );
  }
}

export default CusScrollNum;
