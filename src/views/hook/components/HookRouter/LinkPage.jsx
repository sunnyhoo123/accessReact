import React from "react";
import {
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import ClassRoute from "@views/talent/components/ClassRoute";
import { Button, Result } from "antd";

import qs from "qs";

const LinkPage = () => {
  const history = useHistory();
  const location = useLocation();
  const searchPa = qs.parse(location.search, { ignoreQueryPrefix: true }); // 获取search传参
  const uPa = useParams(); // 获取params传参
  const statePa = location.state;
  console.log(location, statePa, searchPa, uPa, "location");
  const string = "Glory of Kings";
  console.log(
    "I do like %c%s",
    "padding: 2px 4px;background: orange;color: white;border-radius: 2px;",
    string
  );
  const toPage = (path) => {
    history.push(path);
  };

  let match = useRouteMatch({
    path: "/LinkPage:33",
    strict: true,
    sensitive: true,
  });

  return (
    <div>
      <Link
        to={{
          pathname: "/classRoute/3",
          search: `${location.search}`,
        }}
      >
        使用react-router-dom中的Link
      </Link>
      <Button onClick={() => toPage("/boil")}>摄氏度转换</Button>
      <button type="button" onClick={() => history.goBack()}>
        返回
      </button>
      {match ? (
        // <ClassRoute match={match} /> :
        <div match={match} />
      ) : (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      )}
    </div>
  );
};

export default LinkPage;
