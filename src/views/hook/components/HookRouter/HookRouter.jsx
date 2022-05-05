import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const HookRouter = (props) => {
  const history = useHistory();

  const toPage = (path) => {
    history.push({
      pathname: `${path}:adv`,
      search: "?resume=99",
      state: { name: "kafuka" },
      others: { id: 990 },
    });
  };

  const toPage2 = () => {
    const level = "mid";
    const name = "fgm";
    const id = 990;
    const other = 100;
    /* 
    params传参：name/id，属性值为动态路由。优点：刷新页面，参数不丢失；缺点：1.只能传字符串等，传值过多url会变得很长 2. 参数必须在路由上配置
    search传参：level。优点：刷新页面，参数不丢失；缺点：只能传字符串，传值过多url会变得很长，获取参数需要自定义hooks
    state传参：id/other, 加密传参，不显示在路径上。优点：可以传对象；缺点：刷新页面，参数丢失
     */
    history.push(
      `/hookRoute/${name}/${id}?level=${level}`,
      // `/hookRoute/${name}?level=${level}`,
      { id },
      { other } // 注意：多传没用
    );
  };

  return (
    <div>
      <Button onClick={() => toPage("/hookRoute")}>方式1:hook路由</Button>
      <Button onClick={() => toPage2()}>方式2:hook路由</Button>
    </div>
  );
};

export default HookRouter;
