import React, { useState, useRef } from "react";
import { Form } from "antd";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import { IconSend } from "@tabler/icons";

export const RightIconBox = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-item: center;
`;
const ActionItems = ({
  id,
  index,
  node,
  onChangeEvent,
  deleteVisible,
  nodeRow,
}) => {
  const cRef = useRef(null);
  const deleteTemplate = (id) => {
    deleteVisible(true);
  };
  const handleOnClick = () => {
    onChangeEvent(true, nodeRow);
  };
  const doc = document.getElementById("antTablePlus");
  const curDom = doc?.getElementsByClassName("ant-table-row")[index];
  return (
    <Box
      key={id}
      position="absolute"
      top={() => {
        console.log(3333);
        if (curDom) return `${curDom.offsetTop}px`;
      }}
      className={index}
      right="-187px"
      height={curDom?.offsetHeight}
      width="80px"
      transition="right 0.5s"
      zIndex="-1"
      boxShadow="-5px 0 4px -2px rgba(27, 27, 27, 0.1)"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(record) => {
        const doc = document.getElementById("antTablePlus");
        let actions = doc?.getElementsByClassName(index)[0];
        actions.style.right = "0px";
        actions.style.zIndex = "1";
      }}
      onMouseLeave={(record) => {
        const doc = document.getElementById("antTablePlus");
        let actions = doc?.getElementsByClassName(index)[0];
        actions.style.right = "-187px";
      }}
      bg="#EFF7FB"
    >
      <RightIconBox>
        <IconSend onClick={handleOnClick}></IconSend>
      </RightIconBox>
    </Box>
  );
};

export default ActionItems;
