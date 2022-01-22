import React from "react";
import { Box, Text, Link, Image } from "@chakra-ui/react";
import { SmallImage, CheckedIcon } from "./index.styles.js";
import { IconCircleX } from "@tabler/icons";

const ChakraUI = () => {
  return (
    <Box>
      <Text>
        Did you know that{" "}
        <Link color="teal.500" href="#">
          links can live inline with text
        </Link>
      </Text>
      <Box boxSize="sm">
        <Image
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          fallbackSrc="https://via.placeholder.com/150"
          // w="100%"
          // h="100%"
          htmlWidth="100"
          htmlHeight="100"
        />
        <SmallImage></SmallImage>
        <CheckedIcon />
        <IconCircleX />
      </Box>
    </Box>
  );
};

export default ChakraUI;
