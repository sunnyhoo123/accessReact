import _ from "lodash";

// 数组去重
const uniqueArray = () => {
  let objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ];
  let result = _.uniqWith(objects, _.isEqual);
  console.log(result);
};

const findIndex = () => {
  let testArr = [
    { name: "鸣人", age: 16 },
    { name: "佐助", age: 17 },
    { name: "卡卡西", age: 26 },
  ];
  let index = _.findIndex(testArr, { name: "佐助" }); // => 1
  console.log(index);
};
export { uniqueArray, findIndex };
