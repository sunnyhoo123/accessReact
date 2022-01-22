import React, { useContext } from "react";
import { ThemeContext, SizeContext } from "./createContext.js";

const HookChild = (props) => {
  const theme = useContext(ThemeContext);
  const size = useContext(SizeContext);

  return (
    <div>
      <h1>
        theme: {theme}, size: {size}
      </h1>
    </div>
  );
};

export default HookChild;
