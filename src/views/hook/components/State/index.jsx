import React, { useState, useMemo, useCallback, useEffect } from "react";
import WithPromise from "./WithPromise";
import Timeout from "./Timeout";

import { Tag, Button } from "antd";

const HookState = (props) => {
  return (
    <div>
      <WithPromise></WithPromise>
      <Timeout></Timeout>
    </div>
  );
};

export default HookState;
