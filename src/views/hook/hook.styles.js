import styled from "@emotion/styled/macro";
import { Box, Select } from "@chakra-ui/react";

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

export const FormBox = styled.form`
  #storeName {
    font-size: 14px;
  }
`;
