import React from "react";
import { Grid, Tag, Row, Col } from "antd";

const { useBreakpoint } = Grid;

const AntGrid = () => {
  const screens = useBreakpoint();
  const colStyle = {
    background: "#0092ff",
    padding: "16px 0",
    color: "#fff",
    textAlign: "center",
  };
  return (
    <>
      Current break point:{" "}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
      <section>
        <Row>
          <Col
            span={12}
            style={{ ...colStyle, background: "rgba(0,146,255,.75)" }}
          >
            col-12
          </Col>
          <Col span={12} style={colStyle}>
            col-12
          </Col>
          <Col
            flex={2}
            style={{ ...colStyle, background: "rgba(0,22,255,.75)" }}
          >
            2 / 5
          </Col>
          <Col flex={3} style={colStyle}>
            3 / 5
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AntGrid;
