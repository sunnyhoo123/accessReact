import React, { useState } from "react";
import { IconArrowBackUp, IconArrowForwardUp } from "@tabler/icons";
import { Checkbox, Text, Flex, Box } from "@chakra-ui/react";
import CusFlipHover from "./CusFlipHover";
import styles from "../styles/CusFlip.less";

const CusFlip = (props) => {
  const [flipImg, setFlipImg] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className={styles.transformCard}>
        <div className={styles.scene}>
          <div className={`${styles.card} ${flipImg ? styles.card_flip : ""}`}>
            <div className={`${styles.card__face} ${styles.card__face__front}`}>
              <div className={styles.arrowIcon}>
                <IconArrowForwardUp
                  onClick={() => setFlipImg(!flipImg)}
                ></IconArrowForwardUp>
              </div>

              <img
                alt="cnk"
                src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
              />
              <Flex color="black" backgroundColor="#f6f6f6" padding="8px">
                Items made by you
              </Flex>
              <Flex color="black" backgroundColor="#f6f6f6" padding="8px">
                <Text color="black" mr="16px">
                  Sell Products
                </Text>
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  isChecked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                ></Checkbox>
              </Flex>
            </div>
            <div className={`${styles.card__face} ${styles.card__face__back}`}>
              <div className={styles.arrowIcon}>
                <IconArrowBackUp
                  onClick={() => setFlipImg(!flipImg)}
                ></IconArrowBackUp>
              </div>
              <Flex color="black" flexDirection="column" height="100%">
                <Box h="200px">
                  <Text mt="48px">As a seller on MakerPlace you can...</Text>
                  <div>
                    List up to 10 handmade products for a small fee of $0.20
                    each
                  </div>
                  <div>
                    Customize your storefront with your personal logo and
                    branding
                  </div>
                </Box>
                <Flex color="black" backgroundColor="#f6f6f6" padding="8px">
                  Items made by you
                </Flex>
                <Flex color="black" backgroundColor="#f6f6f6" padding="8px">
                  <Text color="black" mr="16px">
                    Sell Products
                  </Text>
                  <Checkbox
                    size="lg"
                    colorScheme="orange"
                    isChecked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  ></Checkbox>
                </Flex>
              </Flex>
            </div>
          </div>
        </div>
      </div>
      <CusFlipHover></CusFlipHover>
    </div>
  );
};

export default CusFlip;
