import React from "react";
import EffectAndFunc from "./EffectAndFunc";
import EffectRule from "./EffectRule";
import Records from "./Records";

import { Tag, Button } from "antd";

const HookEffect = (props) => {
  return (
    <div>
      <EffectRule></EffectRule>
      <Records></Records>
      {/* <EffectAndFunc></EffectAndFunc> */}
    </div>
  );
};

export default HookEffect;
