import React, { useRef, useState, useEffect } from "react";
import { Button, Tag } from "antd";
import styles from "../index.less";
import _ from "lodash";

const HookChildB = ({ setList, existing = [] }) => {
  const [materials, setMaterials] = useState([]);
  const [materialsData, setMaterialsData] = useState([]);
  console.log(existing, 'init');
  
  useEffect(() => {
    // return () => clearTimeout(fn)
  }, []);

  useEffect(() => {
    console.log(materials, 'materials');

    // return () => clearTimeout(fn)
    setMaterialsData(materials)
  }, [materials]);

  useEffect(() => {
    console.log(existing, 'existing');
    // return () => clearTimeout(fn)
  }, [existing]);

  const childSetList = (type) => {
    console.log(type, 99);
    setList(type);
  };

  return (
    <div className={styles.hookWrap}>
      <Button onClick={() => childSetList(1)}>click 1</Button>
      <Button onClick={() => childSetList(2)}>click 2</Button>
      <Button onClick={() => setMaterials(_.random(0, 9))}>change materials</Button>
      <Tag color="geekblue">{materialsData}</Tag>
    </div>
  );
};

export default HookChildB;
