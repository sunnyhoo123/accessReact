import React, { useRef, useState, useEffect } from "react";

import styles from "../index.less";

const HookChildA = (props) => {
  const mediaRef = useRef({ current: null });
  const [showChild, setShowChild] = useState(props.showChild);

  const imgUrl =
    "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85298830999e429cb759d72f80f3f7a9~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp";
  const title = "这个是title";
  // useEffect(() => {
  //   // const fn = setTimeout(() => {
  //   //   console.log(mediaRef)
  //   // }, 1000);
  //   console.log(props.imgData.imgUrl)
  //   // debugger;
  //   // return () => clearTimeout(fn)
  // });

  useEffect(() => {
    // const fn = setTimeout(() => {
    //   console.log(mediaRef)
    // }, 1000);
    if (props.showChild) {
      console.log(mediaRef);
      debugger;
    }
    // return () => clearTimeout(fn)
  }, [props.showChild]);

  return (
    props.showChild && (
      <div ref={mediaRef}>
        <div>{title}</div>
        <img
          src={props.imgData.imgUrl}
          alt="imgWrap"
          className={styles.imgWrap}
        />
        <img src={imgUrl} alt="imgWrap" className={styles.imgWrap} />
        <div>footer</div>
      </div>
    )
  );
};

export default HookChildA;
