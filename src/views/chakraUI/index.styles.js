import styled from "@emotion/styled";
import { Flex, AspectRatio } from "@chakra-ui/react";
import { IconCheck } from "@tabler/icons";

export const SmallImage = styled.img`
  cursor: pointer;
  border-radius: 16px;
  border: ${(props) => (props.selected ? `2px solid red` : "unset")};
`;

export const CheckedIcon = styled(IconCheck)`
  color: red;
  width: 20px;
`;
