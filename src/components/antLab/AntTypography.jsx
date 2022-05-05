import React, { useState } from "react";
import { Typography } from "antd";
import { SmileOutlined, SmileFilled } from "@ant-design/icons";

const { Paragraph } = Typography;

const AntTypography = () => {
  const [editableStr, setEditableStr] = useState("This is an editable text.");

  return (
    <>
      <div style={{ maxWidth: "500px" }}>
        <Paragraph editable={{ onChange: setEditableStr }}>
          {editableStr}
        </Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph
          copyable={{
            icon: [
              <SmileOutlined key="copy-icon" />,
              <SmileFilled key="copied-icon" />,
            ],
            tooltips: ["click here", "you clicked!!"],
          }}
        >
          Custom Copy icon and replace tooltips text.
        </Paragraph>
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "展开" }}>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </div>
    </>
  );
};

export default AntTypography;
