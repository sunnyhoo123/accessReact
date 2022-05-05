import styled from "@emotion/styled/macro";
import { Box, Select } from "@chakra-ui/react";

export const Wrapper = styled(Box)`
  display: flex;
  align-items: start;
  flex-direction: column;
  min-height: ${(props) => props.minHeight || "auto"};
  justify-content: ${(props) => props.justifyContent};
  max-width: ${(props) => props.maxWidth || "100%"};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "16px"};

  &.states {
    width: ${(props) => (props.width ? props.width : "100px")};
  }
`;

export const Input = styled.input`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "inherit")};
  text-indent: ${(props) => (props.textIndent ? props.textIndent : "inherit")};
  border: 1px solid;
  border-left: ${(props) =>
    props.borderLeft ? `${props.borderLeft}` : `1px solid`};
  border-right: ${(props) =>
    props.borderRight ? `${props.borderRight}` : `1px solid`};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "52px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  padding: ${(props) =>
    props.padding ? `${props.padding}` : "14px 16px 14px 16px"};
  margin-top: 4px;
  margin-bottom: 4px;
  border-color: ${(props) => (props.borderColor ? "#EB003B" : "#1B1B1B")};
  &:focus {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
    border-width: 2px;
  }
  &:disabled {
    border-color: #cdcdcd;
    background-color: #eaeaea;
    color: #757575;
    cursor: not-allowed;
  }
  &::-webkit-credentials-auto-fill-button {
    display: none !important;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
  &:-internal-autofill-selected {
    -webkit-text-fill-color: black;
    transition: background-color 5000s ease-out 0.5s;
  }
`;

export const Label = styled.label`
  font-size: ${(props) => {
    return props.fontSize ? props.fontSize : "12px";
  }};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  text-transform: capitalize;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "12px")};
  padding: ${(props) => (props.padding ? props.padding : "0px 0px 0px 16px")};
  color: ${(props) => (props.color ? "#EB003B" : "#1B1B1B")};
  word-break: break-all;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #fff;
  width: 20px;
  height: 20px;
  position: relative;
  right: 32px;
  top: 20px;
`;

export const StyledSelect = styled(Select)`
  height: ${(props) => (props.height ? props.height : "52px")};
  margin-top: 4px;
  margin-bottom: 4px;
  border: ${(props) => (props.border ? `${props.border}` : "1px solid")};
  &:disabled {
    opacity: 1;
    border-color: #cdcdcd;
    background-color: #eaeaea;
    color: #cdcdcd;
  }
`;

export const IconBeforeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;
