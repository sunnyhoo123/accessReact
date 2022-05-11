import React, { forwardRef, useState } from "react";

import { Image } from "@chakra-ui/react";

// This image component utilizes a state variable isLoaded to determine conditional styling
// for when the source is successfully loaded - this should reduce any instances of
// flickering broken source icons
function CustomImage({ ...rest }, ref) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Image
      ref={ref}
      visibility={isLoaded ? "visible" : "hidden"}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      {...rest}
    />
  );
}

export default forwardRef(CustomImage);
