import React from "react";
import {
  Text,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useMediaQuery,
  AspectRatio,
  Accordion,
  Image,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { SmallImage, CheckedIcon } from "./index.styles.js";
import { IconCircleX } from "@tabler/icons";
import UserImg from "./Message-user-logo.svg";

const ChakraUI = () => {
  return (
    <Box>
      <Tabs orientation="vertical">
        <TabList>
          <Tab>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Tab>Section 1</Tab>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Lorem ipsum</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Tab>Section 2</Tab>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Lorem ipsum dolor</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>ttt</Text>
          </TabPanel>
          <TabPanel>
            <Heading>hhh</Heading>
          </TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
      <Box minWidth="60px">
        <AspectRatio ratio={1}>
          <Image
            width="80px"
            borderRadius="8px"
            src={UserImg}
            boxSize="150px"
            alt="avatar"
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default ChakraUI;
