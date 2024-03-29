import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  ScrollBox,
  ScrollBoxOut,
  ScrollBoxOutCom,
} from "./LoadAndScroll.styles";
import {
  Button,
  Box,
  AspectRatio,
  Flex,
  Image,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  createStandaloneToast,
} from "@chakra-ui/react";
import { sites, MY_ENDLESS_LIST } from "@common/mockArray";
import { SlidingWindowScrollHook } from "./SlidingWindowScrollHook";
const LoadAndScroll = () => {
  const [list, setList] = useState(sites);
  const onLoad = () => {
    console.log("onLoad");
  };
  const add = () => {
    console.log("onLoad");
    const sites2 = ["111", "222", "333", "444", "555", "666", "777"];
    setList([...sites2, ...sites]);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const toTop = () => {
    // 滑动到顶部 (顶部是相对的)
    document.getElementById("ScrollBoxOutCom").scrollTo(0, 0);
  };

  return (
    <>
      <Container onLoad={onLoad}>
        <Button onClick={toTop}>ToTop</Button>
        {/* <style onload={alert("onLoad 被触发了")}>123</style> */}
        <ScrollBox>
          <ScrollBoxOut>
            <ScrollBoxOutCom id="ScrollBoxOutCom">
              {list.map((i, index) => (
                <div key={index}>{i}</div>
              ))}
            </ScrollBoxOutCom>
          </ScrollBoxOut>
        </ScrollBox>

        <Button onClick={add}>add</Button>
        <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={95} />
        <>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <ScrollBox>
                  <ScrollBoxOut>
                    <ScrollBoxOutCom>
                      {list.map((i, index) => (
                        <div key={index}>{i}</div>
                      ))}
                    </ScrollBoxOutCom>
                  </ScrollBoxOut>
                </ScrollBox>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </Container>
    </>
  );
};

export default LoadAndScroll;
