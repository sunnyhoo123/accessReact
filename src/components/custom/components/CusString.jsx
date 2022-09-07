import React from "react";
import { useEffect } from "react";
import "./CusString.css";
let text =
  "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value";

const CusString = () => {
  useEffect(() => {
    clamps();
  });

  const clamps = () => {
    const totalTextLen = text.length;
    const formatStr = () => {
      const ele = document.getElementsByClassName("demo")[0];
      const lineNum = 2;
      const baseWidth = window.getComputedStyle(ele).width;
      const baseFontSize = window.getComputedStyle(ele).fontSize;
      const lineWidth = +baseWidth.slice(0, -2);

      // 所计算的strNum为元素内部一行可容纳的字数(不区分中英文)
      const strNum = Math.floor(lineWidth / +baseFontSize.slice(0, -2));

      let content = "";

      // 多行可容纳总字数
      const totalStrNum = Math.floor(strNum * lineNum);

      const lastIndex = totalStrNum - totalTextLen;

      if (totalTextLen > totalStrNum) {
        content = text.slice(0, lastIndex - 3).concat("...");
      } else {
        content = text;
      }
      ele.innerHTML = content;
    };

    formatStr();

    // 只能监听浏览器宽高
    window.onresize = () => {
      formatStr();
    };
  };
  const handleresize = () => {
    console.log("普通标签无法监听resize");
  };
  return (
    <>
      <div className="cus-con" onresize={handleresize}>
        <div className="cus-wrap">
          <div className="cus-txt">{text}</div>
          <div className="cus-title" title={text}>
            {text}
          </div>
        </div>
        <div className="cus-wrap">
          <div className="cus-txt">{text}</div>
          <div className="cus-title1" title={text}>
            {text}
          </div>
        </div>
      </div>
      <div className="demo"></div>
    </>
  );
};

export default CusString;
