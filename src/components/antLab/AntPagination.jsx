import React from "react";
import { Pagination } from "antd";

const AntPagination = () => {
  return (
    <Pagination
      total={85}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
    />
  );
};

export default AntPagination;
