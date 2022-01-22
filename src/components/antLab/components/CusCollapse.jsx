import React, { Component } from "react";
import "./CusCollapse.css";

const text = `
  菜鸟教程 -- 学的不仅是技术，更是梦想！！！
`;

class CusUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlList: [],
    };
  }

  componentDidMount() {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        console.log(this.classList);
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  render() {
    return (
      <div>
        <button className="accordion">Runoob 1</button>
        <div className="panel">
          <p>{text}</p>
        </div>

        <button className="accordion">Runoob 2</button>
        <div className="panel">
          <p>{text}</p>
        </div>

        <button className="accordion">Runoob 3</button>
        <div className="panel">
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default CusUpload;
