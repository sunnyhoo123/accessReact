import React, { useState } from "react";
import { Button } from "antd";
import { isEmpty, wait, daysBetween, redirect } from "@utils/JScom";

const useUtils = () => {
  const useIsEmpty = () => {
    console.log(isEmpty({}));
    console.log(isEmpty({ not: "empty" }));
  };

  const testWait = async () => {
    await wait(2000);
    console.log("waited for 2 second");
  };

  const daysCalc = async () => {
    const days = daysBetween(new Date("2021-12-1"), new Date("2021-12-2"));
    console.log(days);
  };

  const redirectUrl = async () => {
    redirect("http://www.google.com");
  };

  return (
    <div>
      <Button onClick={useIsEmpty}>isEmptyObj</Button>
      <Button onClick={testWait}>testWait</Button>
      <Button onClick={daysCalc}>daysCalc</Button>
      <Button onClick={redirectUrl}>redirect</Button>
    </div>
  );
};

export default useUtils;
