import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import _ from "lodash";
import { weatherApi } from "@common/Api/api.js";

import { Button, Tabs } from "antd";

import HookRef from "./components/HookRef";
import HookChild from "./components/HookChild";
import HookChildA from "./components/HookChildA";
import HookApi from "./components/HookApi";
import HookMemo from "./components/HookMemo";
import HookRouter from "./components/HookRouter/HookRouter";
import HookCallback from "./components/HookCallback/HookCallback";
import HookState from "./components/HookState";
import HookEffect from "./components/HookEffect";
import HookPlus from "./components/HookPlus";
import HookFormik from "./form/HookFormik";
import HookuseFormikPlus from "./form/HookuseFormikPlus";
import HookuseFormik from "./form/HookuseFormik";
import HookuseFormikYup from "./form/HookuseFormikYup";
import OriginForm from "./form/OriginForm";
import Parent from "./parent";
import styles from "./index.less";

const { TabPane } = Tabs;

const HookCom = () => {
  const hookRef = useRef(null);

  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [randomNum, setRandom] = useState(0);

  const [cusObj, setCusObj] = useState({});
  const [weather, setWeather] = useState(null);
  const [showChild, setShowChild] = useState(false);
  const [weatherList, setWeatherList] = useState([]);
  const [stateObj, setStateObj] = useState([]);

  const staticObj = {
    name: "kaka",
    age: "20",
  };

  const imgData = {
    imgUrl: "https://ae01.alicdn.com/kf/U469963ca85174c23b966e8e948edc290m.jpg",
  };
  let staticNum = 123;
  // Similar to componentDidMount and componentDidUpdate:
  // 副作用，组件挂载完后调用
  /**
   * useEffect 规则
   * 没有传第二个参数时，在每次 render 之后都会执行 useEffect中的内容
   * useEffect接受第二个参数来控制跳过执行，下次 render 后如果指定的值没有变化就不会执行
   * useEffect 是在 render 之后浏览器已经渲染结束才执行
   * useEffect 的第二个参数是可选的，类型是一个数组
   * 根据第二个参数的不同情况，useEffect具有不同作用
   */
  useEffect(() => {
    // Update the document title using the browser API
    console.log(count);
    return () => {
      // 注意：effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次(如果没有第二个参数)
      console.log(
        "这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数, 相当于在class中componentWillUnmount调用"
      );
    };
  });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(count, "仅在 count 更改时更新");
  }, [count]); // 首次会渲染，仅在 count 更改时更新

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(count, "仅在 count 更改时更新");
  }, [count]); // 首次会渲染，仅在 count 更改时更新

  const getWeather = async () => {
    const res = await axios.get(weatherApi);
    console.log(res);
    setWeather(res.data.aqi);
    setWeatherList(res.data.data);
  };

  const handleRef = () => {
    hookRef.current.focus();
    console.log(hookRef, "***hookref");
  };

  const changeNum = () => {
    setRandom(_.random(0, 5));
    staticObj.name = "jerry";
    setStateObj([212]);
    console.log(staticObj, 99);
    staticNum = 6666;
  };

  const setState = () => {
    const updatedValues = { name: "morpheus" };
    setCusObj((prevState) => {
      return { ...prevState, ...updatedValues };
    });
  };
  console.log("render--", randomNum);
  return (
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="State" key="1">
        <HookState />
      </TabPane>
      <TabPane tab="Effect" key="2">
        <HookEffect />
      </TabPane>
      <TabPane tab="Memo" key="3">
        <HookMemo />
      </TabPane>
      <TabPane tab="Ref" key="4">
        <HookRef count={count} ref={hookRef} />
      </TabPane>
      <TabPane tab="Callback" key="5">
        <HookCallback />
      </TabPane>
      <TabPane tab="Plus" key="6">
        <HookPlus />
      </TabPane>
      <TabPane tab="Formik" key="7">
        <HookFormik />
        {/* <HookuseFormik />
        <HookuseFormikYup /> */}
        {/* <HookuseFormikPlus /> */}
        {/* <OriginForm /> */}
      </TabPane>
      <TabPane tab="HookRef" key="8">
        <HookPlus />
      </TabPane>
      <TabPane tab="HookReeeeef" key="9">
        <Parent></Parent>
      </TabPane>
      <TabPane tab="router" key="10">
        <HookRouter></HookRouter>
      </TabPane>
      <TabPane tab="oth" key="11">
        <div className={styles.hookWrap}>
          <Button onClick={setState}>{cusObj.name}</Button>
          <Button onClick={() => handleRef()}>调用子组件标签中的ref</Button>
          <Button onClick={changeNum}>update num {randomNum} </Button>
          <Button onClick={getWeather}>getWeather</Button>
          <Button onClick={() => setShowChild(true)}>showChild</Button>

          <HookChild
            num={randomNum}
            staticObj={staticObj}
            stateObj={stateObj}
            weather={weather}
            weatherList={weatherList}
          />
          {/* {
        showChild && <HookChildA imgData={imgData} showChild={showChild}/>
      } */}
          <HookChildA imgData={imgData} showChild={showChild} />
          {/* <HookChild num={randomNum} staticObj={staticObj} staticNum={staticNum} /> */}
          <HookApi weather={weather} weatherList={weatherList} />
        </div>
      </TabPane>
    </Tabs>
  );
};

export default HookCom;
