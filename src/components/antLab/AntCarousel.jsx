import React, { Component } from "react";
import { Carousel } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  LeftCircleTwoTone,
} from "@ant-design/icons";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons";

import Slider from "react-slick";
import styles from "./styles/AntCarousel.less";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
class AntCarousel extends Component {
  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <IconArrowNarrowLeft color="red" />,
      nextArrow: <IconArrowNarrowRight color="red" />,
    };

    return (
      <>
        {/* <div className={styles.antCarousel}>
          <Carousel
            arrows
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
            afterChange={this.onChange}
          >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div> */}
        <div>
          <Slider {...settings} className={styles.sliderCarousel}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default AntCarousel;
