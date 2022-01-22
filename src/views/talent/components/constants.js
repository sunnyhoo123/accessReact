const lodashList = [
  {
    type: "数组",
    funs: [
      { value: "chunk", cb: "chunkFun" },
      { value: "difference", cb: "differenceFun" },
      { value: "differenceWith", cb: "differenceWithFun" },
      { value: "drop", cb: "dropFun" },
      { value: "dropRight", cb: "dropRightFun" },
      { value: "fill", cb: "fillFun" },
      { value: "head", cb: "headFun" },
      { value: "intersection", cb: "intersectionFun" },
      { value: "intersectionBy", cb: "intersectionByFun" },
      { value: "last", cb: "lastFun" },
      { value: "union", cb: "unionFun" },
      { value: "uniqBy", cb: "uniqByFun" },
      { value: "uniqWith", cb: "uniqueArray" },
      { value: "without", cb: "withoutFun" },
    ],
  },
  {
    type: "集合",
    funs: [
      { value: "filter", cb: "filterFun" },
      { value: "groupBy", cb: "groupByFun" },
      { value: "keyBy", cb: "keyByFun" },
      { value: "shuffle", cb: "shuffleFun" },
    ],
  },
  {
    type: "语言",
    funs: [
      { value: "cloneDeep", cb: "cloneDeepFun" },
      { value: "isArray", cb: "isArrayFun" },
      { value: "isEmpty", cb: "isEmptyFun" },
      { value: "isEqual", cb: "isEqualFun" },
      { value: "isInteger", cb: "isIntegerFun" },
      { value: "isNil", cb: "isNilFun" },
      { value: "isNumber", cb: "isNumberFun" },
      { value: "isObject", cb: "isObjectFun" },
      { value: "isString", cb: "isStringFun" },
      { value: "toNumber", cb: "toNumberFun" },
    ],
  },
  {
    type: "数学",
    funs: [{ value: "sumBy", cb: "sumByFun" }],
  },
  {
    type: "数字",
    funs: [{ value: "random", cb: "randomFun" }],
  },
  {
    type: "对象",
    funs: [
      { value: "assign", cb: "assignFun" },
      { value: "findKey", cb: "findKeyFun" },
      { value: "get", cb: "getFun" },
      { value: "invert", cb: "invertFun" },
      { value: "keys", cb: "keysFun" },
      { value: "mapValues", cb: "mapValuesFun" },
      { value: "merge", cb: "mergeFun" },
      { value: "pick", cb: "pickFun" },
      { value: "pickBy", cb: "pickByFun" },
      { value: "omit", cb: "omitFun" },
    ],
  },
  {
    type: "字符串",
    funs: [
      { value: "camelCase", cb: "camelCaseFun" },
      { value: "capitalize", cb: "capitalizeFun" },
      { value: "lowerCase", cb: "lowerCaseFun" },
      { value: "snakeCase", cb: "snakeCaseFun" },
      { value: "startCase", cb: "startCaseFun" },
      { value: "startsWith", cb: "startsWithFun" },
      { value: "upperFirst", cb: "upperFirstFun" },
    ],
  },
  {
    type: "实用函数",
    funs: [
      { value: "identity", cb: "identityFun" },
      { value: "times", cb: "timesFun" },
    ],
  },
];

export { lodashList };
