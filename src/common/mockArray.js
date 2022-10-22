const arrData = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const treeData = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const MY_ENDLESS_LIST = [
  {
    key: 1,
    value: "A",
  },
  {
    key: 2,
    value: "B",
  },
  {
    key: 3,
    value: "C",
  },
  {
    key: 4,
    value: "C",
  },
  {
    key: 5,
    value: "C",
  },
  {
    key: 6,
    value: "C",
  },

  {
    key: 7,
    value: "C",
  },
  {
    key: 8,
    value: "C",
  },
  {
    key: 9,
    value: "C",
  },
  {
    key: 10,
    value: "C",
  },
  {
    key: 11,
    value: "C",
  },
  {
    key: 12,
    value: "C",
  },
  {
    key: 13,
    value: "C",
  },
  {
    key: 14,
    value: "C",
  },
  {
    key: 15,
    value: "15",
  },
  // 中间就不贴了...
  {
    key: 45,
    value: "AS",
  },
];

const sites = [
  "Google",
  "Taobao",
  "Runoob",
  "Wiki",
  "Zhihu",
  "Baidu",
  "Sina",
  "Tmall",
  "JD",
  "Alibaba",
  "QQ",
  "Weixin",
  "R",
  "Rust",
  "Python",
  "Ruby",
];

export { arrData, treeData, sites, MY_ENDLESS_LIST };
