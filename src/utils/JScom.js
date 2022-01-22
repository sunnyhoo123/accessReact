// 检查对象是否为空
const isEmpty = (obj) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 等待一定时间后执行
const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

// 获取两个日期之间的天差
const daysBetween = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

// 重定向到另一个 URL
const redirect = (url) => (window.location.href = url);

// 返回网页上突出显示或选定的文本
const getSelectedText = () => window.getSelection().toString();

export { isEmpty, wait, daysBetween, redirect };
