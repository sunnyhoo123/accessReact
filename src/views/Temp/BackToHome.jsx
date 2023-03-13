import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Flex, Box } from "@chakra-ui/react";
import AppleLogin from "react-apple-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

export default function BackToHome() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 1 ? 1000 : null
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      } else {
        router.replace("https://makerplace.michaels.com");
      }
    }, [delay]);
  }

  return (
    <Flex justifyContent="center" alignItems="center" h="88vh">
      <Box>Coming back to the home page in the secondsdown. {count}</Box>
    </Flex>
  );
}
