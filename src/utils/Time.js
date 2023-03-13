import momentTz from "moment-timezone";

const Time = () => {
  // 1.js获取当前时间戳的方法
  // 第一种：获取的时间戳是把毫秒改成000显示，因为这种方式只精确到秒
  // 第二种和第三种是获取了当前毫秒的时间戳
  var timestamp1 = Date.parse(new Date());
  var timestamp2 = new Date().valueOf();
  var timestamp3 = new Date().getTime();
  // 2.js获取制定时间戳的方法
  var oldTime = new Date("2015/06/23 08:00:20").getTime() / 1000;
  // getTime(); 返回数值的单位是毫秒。

  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
};

function days(startTime, endTime) {
  const time =
    new Date(endTime || 0).valueOf() - new Date(startTime || 0).valueOf();
  return Math.ceil(time / 86400000) || 0;
}

// 时区
export function formatUniversalDate(timestamp) {
  return `${momentTz(Number(timestamp))
    .tz("America/Chicago")
    .format("MM/DD/YYYY hh:mm:ss A z")}`;
}
