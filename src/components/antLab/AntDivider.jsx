import React, { useState } from "react";
import { Divider } from "antd";

const AntDivider = () => {
  return (
    <>
      <div style={{ maxWidth: "500px" }}>
        Text
        <Divider type="vertical" />
        Link
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider dashed />
        <Divider>Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
      </div>
    </>
  );
};

export default AntDivider;
