import React, { useState } from "react";
import { Mentions } from "antd";

const { Option } = Mentions;

const MOCK_DATA = {
  "@": ["afc163", "zombiej", "yesmeck"],
  "#": ["1.0", "2.0", "3.0"],
};

const AntMentions = () => {
  const [prefix, setPrefix] = useState("@");
  const search = (_, prefix) => {
    setPrefix(prefix);
  };

  return (
    <Mentions
      style={{ width: "100%" }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={["@", "#"]}
      onSearch={search}
    >
      {(MOCK_DATA[prefix] || []).map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Mentions>
  );
};

export default AntMentions;
