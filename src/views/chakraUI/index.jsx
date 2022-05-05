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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { SmallImage, CheckedIcon } from "./index.styles.js";
import { IconCircleX } from "@tabler/icons";

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
    </Box>
  );
};

export default ChakraUI;
