import styled from "@emotion/styled";

export const Container = styled.div`
  overflow-y: auto;
  height: 100%;
  flex: 1;
`;

export const ScrollBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 200px;
  height: 200px;
  overflow: auto;
`;

export const ScrollBoxOut = styled.div`
  // width: 200px;
  // height: 200px;
  // overflow: auto;
`;

export const ScrollBoxOutCom = styled.div`
  width: 200px;
  height: 200px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
`;
