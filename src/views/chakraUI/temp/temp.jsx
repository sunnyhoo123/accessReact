import React from "react";
import { Box, Text, Link, Image, Select } from "@chakra-ui/react";
import { SmallImage, CheckedIcon } from "./index.styles.js";
import { IconCircleX } from "@tabler/icons";

const Temp = () => {
  return (
    <Box>
      <Text>
        Did you know that{" "}
        <Link color="teal.500" href="#">
          links can live inline with text
        </Link>
      </Text>
      <Text>
        Please pick a minimum 120x120 pixel image for the best presentation.
      </Text>
      <Text>
        <Text mr="6px" display="inline-block" color="semantics.link">
          Click here
        </Text>{" "}
        to see the detailed guideline for upload images.
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
      <Select placeholder="Select option" transfer>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <select id="mySelect" transfer>
        <option>Apple</option>
        <option>Orange</option>
        <option>Pineapple</option>
        <option>Banana</option>
      </select>
    </Box>
  );
};

export default Temp;
