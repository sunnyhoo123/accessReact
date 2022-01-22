import React, { Component } from "react";
import { Button, Select } from "antd";
import { uniqueArray } from "@common/utils/lodashPlus";
import _ from "lodash";
import { lodashList } from "./constants";

const { Option, OptGroup } = Select;
const funs = {
  uniqueArray: uniqueArray,
};

class ClassRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curFun: null,
      objArr: [{ sid: 123 }, { sid: 456 }, { sid: 789 }],
    };
  }

  onSelect = (LabeledValue, option) => {
    this.setState({
      curFun: this[option.label] || funs[option.label],
    });
  };

  filterOption = (input, option) => {
    return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  isNumberFun = () => {
    // 用法: 检查 value 是否是原始Number数值型 或者 对象。
    // 注意: 要排除 Infinity, -Infinity, 以及 NaN 数值类型，用_.isFinite 方法。
    _.isNumber(3);
    // => true
    _.isNumber(Number.MIN_VALUE);
    // => true
    _.isNumber(Infinity);
    // => true
    _.isNumber("3");
    // => false
    console.log(_.isNumber(3));
  };

  isObjectFun = () => {
    _.isObject({});
    // => true

    _.isObject([1, 2, 3]);
    // => true

    _.isObject(_.noop);
    // => true 函数也是对象

    _.isObject(null);
    // => false
  };

  // 深拷贝
  cloneDeepFun = () => {
    var objects = [{ a: 1 }, { b: 2 }];

    var deep = _.cloneDeep(objects);
    console.log(deep[0] === objects[0]);
    // => false
  };

  // 调用 Function n 次，每次调用返回的结果存入到数组中
  timesFun = () => {
    _.times(3, String);
    // => ['0', '1', '2']

    const t2 = _.times(4, _.constant(0));
    // => [0, 0, 0, 0]

    const t3 = _.times(3, (id) => {
      console.log(id);
    });

    console.log(t2, t3, 90);
  };

  sumByFun = () => {
    var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

    _.sumBy(objects, function (o) {
      return o.n;
    });
    // => 20

    // The `_.property` iteratee shorthand.
    _.sumBy(objects, "n");
    // => 20

    const ob = _.sumBy(objects, function (o) {
      return o.n * 2;
    });
    console.log(ob, 99);
  };

  uniqByFun = () => {
    _.uniqBy([2.1, 1.2, 2.3], Math.floor);
    // => [2.1, 1.2]

    // The `_.property` iteratee shorthand.
    _.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x");
    // => [{ 'x': 1 }, { 'x': 2 }]
  };

  // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  chunkFun = () => {
    _.chunk(["a", "b", "c", "d"], 2);
    // => [['a', 'b'], ['c', 'd']]

    _.chunk(["a", "b", "c", "d"], 3);
    // => [['a', 'b', 'c'], ['d']]
  };

  // 转换字符串string首字母为大写，剩下为小写。
  capitalizeFun = () => {
    _.capitalize("FRED");
    // => 'Fred'

    console.log(_.capitalize("product_listings"));
    // => 'Product_listings'

    console.log(_.capitalize("-product-listings-"));
    // => '-product-listings-'
  };

  // 创建一个被打乱值的集合。 使用Fisher-Yates shuffle 版本。
  shuffleFun = () => {
    _.shuffle([1, 2, 3, 4]);
    // => [4, 1, 3, 2]
  };

  // 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
  differenceFun = () => {
    const { objArr } = this.state;
    _.difference([3, 2, 1], [4, 2]);
    // => [3, 1]

    // 当数组包含对象时不起作用
    const newArr = _.difference(objArr, [{ sid: 123 }]);
    console.log(newArr, "--newArr");
  };

  // 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择
  differenceWithFun = () => {
    const { objArr } = this.state;
    var objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];

    _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);
    // => [{ 'x': 2, 'y': 1 }]

    const d1 = _.differenceWith(
      objArr,
      [{ sid: 123 }, { sid: 456 }],
      _.isEqual
    );
    console.log(d1);
    // => [{ sid: 789 }]
  };

  // 获取数组 array 的第一个元素。
  headFun = () => {
    _.head([1, 2, 3]);
    // => 1

    _.head([]);
    // => undefined

    let h1 = _.head();
    let h2 = _.head("");
    let h3 = _.head(undefined);
    console.log(h1, h2, h3); // => 都是undefined
  };

  // 获取array中的最后一个元素。
  lastFun = () => {
    _.last([1, 2, 3]);
    // => 3

    _.last([]);
    // => undefined
  };

  // 创建一个从 object 中选中的属性的对象。
  pickFun = () => {
    var object = { a: 1, b: "2", c: 3 };

    const p1 = _.pick(object, ["a", "c"]);
    // => { 'a': 1, 'c': 3 }

    const p2 = _.pick(object, "c");
    // => {'c': 3 }
    console.log(p1, p2);
  };

  // 创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性
  pickByFun = () => {
    var object = { a: 1, b: "2", c: 3 };

    _.pickBy(object, _.isNumber);
    // => { 'a': 1, 'c': 3 }
  };

  // 反向版_.pick
  omitFun = () => {
    var object = { a: 1, b: "2", c: 3 };

    _.omit(object, ["a", "c"]);
    // => { 'b': '2' }
  };

  // 转换字符串string以空格分开单词，并转换为小写。
  lowerCaseFun = () => {
    _.lowerCase("--Foo-Bar--");
    // => 'foo bar'

    _.lowerCase("fooBar");
    // => 'foo bar'

    _.lowerCase("__FOO_BAR__");
    // => 'foo bar'

    const lowerCase = _.lowerCase("weweeeDDDDwwwIIUD");
    const lowerCase2 = _.lowerCase("Dec1215 Design");
    const lowerCase3 = _.lowerCase("121Dec1215 Design2323");
    const lowerCase4 = _.lowerCase("121 Dec1215 Design 2323");
    const lowerCase5 = _.lowerCase("AAA 121 Dec1215 De/sign 232, 3 B?BB");

    console.log(lowerCase);
    console.log(lowerCase2);
    console.log(lowerCase3);
    console.log(lowerCase4);
    console.log(lowerCase5);

    console.log("weweeeDDDDwwwIIUD".toLowerCase());
    console.log("Dec1215 Design".toLowerCase());
    console.log("121Dec1215 Design2323".toLowerCase());
    console.log("121 Dec1215 Design 2323".toLowerCase());
    console.log("AAA 121 Dec1215 De/sign 232, 3 B?BB".toLowerCase());
  };

  // 检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。
  // 对象如果被认为为空，那么他们没有自己的可枚举属性的对象。
  isEmptyFun = () => {
    _.isEmpty({});
    console.log(_.isEmpty({}), _.isEmpty(null));
    // => true

    _.isEmpty(null);
    // => true

    _.isEmpty(true);
    // => true

    _.isEmpty(1);
    // => true

    _.isEmpty([1, 2, 3]);
    // => false

    _.isEmpty({ a: 1 });
    // => false
  };

  //  执行深比较来确定两者的值是否相等
  isEqualFun = () => {
    var object = { a: 1 };
    var other = { a: 1 };

    _.isEqual(object, other);
    // => true

    console.log(object === other);
    // => false
  };

  // 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
  intersectionFun = () => {
    _.intersection([2, 1], [4, 2], [1, 2]);
    // => [2]

    // 包含对象时无效
    const i1 = _.intersection(
      [{ sid: 123 }, { sid: 456 }, { sid: 789 }],
      [{ sid: 789 }],
      [{ sid: 789 }]
    );
    console.log(i1);
  };

  // 这个方法类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较
  intersectionByFun = () => {
    _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
    // => [2.1]

    // The `_.property` iteratee shorthand.
    _.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
    // => [{ 'x': 1 }]
  };

  groupByFun = () => {
    _.groupBy([6.1, 4.2, 6.3], Math.floor);
    // => { '4': [4.2], '6': [6.1, 6.3] }

    // The `_.property` iteratee shorthand.
    _.groupBy(["one", "two", "three"], "length");
    // => { '3': ['one', 'two'], '5': ['three'] }
  };

  // 转换 string 字符串为start case.
  startCaseFun = () => {
    _.startCase("--foo-bar--");
    // => 'Foo Bar'

    _.startCase("fooBar");
    // => 'Foo Bar'

    _.startCase("__FOO_BAR__");
    // => 'FOO BAR'
  };

  // 转换字符串string为驼峰写法。
  camelCaseFun = () => {
    _.camelCase("Foo Bar");
    // => 'fooBar'

    _.camelCase("--foo-bar--");
    // => 'fooBar'

    _.camelCase("__FOO_BAR__");
    // => 'fooBar'
  };

  // 创建一个按顺序排列的唯一值的数组
  unionFun = () => {
    _.union([2], [1, 2]);
    // => [2, 1]

    const arrs = {
      arr1: [1, 2, 5, 7],
      arr2: [2, 5, 7],
      arr3: [1, 3, 5, 7],
      arr4: [10, 2, 5, 8, 10, 9],
      arr5: [23, 2, 5, 17],
    };
    const u1 = _.union(...arrs);
    console.log(u1);
  };

  // 创建一个 object 的自身可枚举属性名为数组。
  // Note: 非对象的值会被强制转换为对象。
  keysFun = () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    _.keys(new Foo());
    // => ['a', 'b'] (iteration order is not guaranteed)

    _.keys("hi");
    // => ['0', '1']

    let ob = { name: "kevin", age: 20 };
    let k1 = _.keys(ob);
    console.log(k1);
    // => ["name", "age"]
  };

  fillFun = () => {
    var array = [1, 2, 3];

    _.fill(array, "a");
    console.log(array);
    // => ['a', 'a', 'a']

    _.fill(Array(3), 2);
    // => [2, 2, 2]

    _.fill([4, 6, 8, 10], "*", 1, 3);
    // => [4, '*', '*', 10]

    // fill是属于浅拷贝
    const arrayWithObject = _.fill(Array(3), { name: "" });
    arrayWithObject[0].name = "new";
    console.log(arrayWithObject);
  };

  filterFun = () => {
    var users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    _.filter(users, function (o) {
      return !o.active;
    });
    // => objects for ['fred']

    // The `_.matches` iteratee shorthand.
    _.filter(users, { age: 36, active: true });
    // => objects for ['barney']

    // The `_.matchesProperty` iteratee shorthand.
    _.filter(users, ["active", false]);
    // => objects for ['fred']

    // The `_.property` iteratee shorthand.
    _.filter(users, "active");
    // => objects for ['barney']
  };

  // 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
  invertFun = () => {
    var object = { a: 1, b: 2, c: 1 };

    _.invert(object);
    // => { '1': 'c', '2': 'b' }
  };

  // 检查 value 是否为一个整数
  isIntegerFun = () => {
    _.isInteger(3);
    // => true

    _.isInteger(Number.MIN_VALUE);
    // => false

    _.isInteger(Infinity);
    // => false

    _.isInteger("3");
    // => false
  };

  mapValuesFun = () => {
    var users = {
      fred: { user: "fred", age: 40 },
      pebbles: { user: "pebbles", age: 1 },
    };

    _.mapValues(users, function (o) {
      return o.age;
    });
    // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

    // The `_.property` iteratee shorthand.
    _.mapValues(users, "age");
    // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
  };

  keyByFun = () => {
    var array = [
      { dir: "left", code: 97 },
      { dir: "right", code: 100 },
    ];

    _.keyBy(array, function (o) {
      return String.fromCharCode(o.code);
    });
    // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

    _.keyBy(array, "dir");
    // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

    let array1 = [
      { dir: "left", code: 97 },
      { dir: "right", code: 100 },
      { dir: "left", code: 88 },
    ];
    let k1 = _.keyBy(array1, "dir");
    console.log(k1);
  };

  assignFun = () => {
    function Foo() {
      this.a = 1;
    }

    function Bar() {
      this.c = 3;
    }

    Foo.prototype.b = 2;
    Bar.prototype.d = 4;

    _.assign({ a: 0 }, new Foo(), new Bar());
    // => { 'a': 1, 'c': 3 }
  };

  // merge和assign的不同之处就是：merge遇到相同属性名时，还会:去重+递归属性值
  mergeFun = () => {
    var object = {
      a: [{ b: 2 }, { d: 4 }],
    };

    var other = {
      a: [{ c: 3 }, { e: 5 }],
    };

    _.merge(object, other);
    // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

    let o1 = { a: 1 };
    let o2 = { b: { c: 2, d: 3 } };
    let o3 = { b: { e: 4, d: 5 } };

    let m1 = _.merge(o1, o2, o3);
    console.log(m1);
  };
  // 检查字符串string是否以 target 开头。
  startsWithFun = () => {
    _.startsWith("abc", "a");
    // => true

    _.startsWith("abc", "b");
    // => false

    _.startsWith("abc", "b", 1);
    // => true
  };
  // 返回首个提供的参数
  identityFun = () => {
    var object = { a: 1 };

    console.log(_.identity(object) === object);
    // => true

    console.log(_.identity((1, 2, 5)));
  };
  // 检查 value 是否是 null 或者 undefined。
  isNilFun = () => {
    _.isNil(null);
    // => true

    _.isNil(void 0);
    // => true

    _.isNil(NaN);
    // => false
  };
  toNumberFun = () => {
    _.toNumber(3.2);
    // => 3.2

    _.toNumber(Number.MIN_VALUE);
    // => 5e-324

    _.toNumber(Infinity);
    // => Infinity

    _.toNumber("3.2");
    // => 3.2
  };
  // 类似_.find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身
  findKeyFun = () => {
    var users = {
      barney: { age: 36, active: true },
      fred: { age: 40, active: false },
      pebbles: { age: 1, active: true },
    };

    _.findKey(users, function (o) {
      return o.age < 40;
    });
    // => 'barney' (iteration order is not guaranteed)

    // The `_.matches` iteratee shorthand.
    _.findKey(users, { age: 1, active: true });
    // => 'pebbles'

    // The `_.matchesProperty` iteratee shorthand.
    _.findKey(users, ["active", false]);
    // => 'fred'

    // The `_.property` iteratee shorthand.
    _.findKey(users, "active");
    // => 'barney'
  };
  // 检查 value 是否是 Array 类对象。
  isArrayFun = () => {
    _.isArray([1, 2, 3]);
    // => true

    _.isArray(document.body.children);
    // => false

    _.isArray("abc");
    // => false

    _.isArray(_.noop);
    // => false
  };
  isStringFun = () => {
    _.isArray([1, 2, 3]);
    // => true

    _.isArray(document.body.children);
    // => false

    _.isArray("abc");
    // => false

    _.isArray(_.noop);
    // => false
  };
  // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  dropFun = () => {
    _.drop([1, 2, 3]);
    // => [2, 3]

    _.drop([1, 2, 3], 2);
    // => [3]

    _.drop([1, 2, 3], 5);
    // => []

    _.drop([1, 2, 3], 0);
    // => [1, 2, 3]
  };
  // 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  dropRightFun = () => {
    _.dropRight([1, 2, 3]);
    // => [1, 2]

    _.dropRight([1, 2, 3], 2);
    // => [1]

    _.dropRight([1, 2, 3], 5);
    // => []

    _.dropRight([1, 2, 3], 0);
    // => [1, 2, 3]
  };
  // 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较
  // 注意: 不像_.pull, 这个方法会返回一个新数组。
  withoutFun = () => {
    _.without([2, 1, 2, 3], 1, 2);
    // => [3]

    // 对象没有用
    let a1 = [{ id: 11 }, { id: 22 }, { id: 33 }];
    let w1 = _.without(a1, { id: 11 });
    console.log(w1);
  };
  // 转换字符串string为snake case.
  snakeCaseFun = () => {
    _.snakeCase("Foo Bar");
    // => 'foo_bar'

    _.snakeCase("fooBar");
    // => 'foo_bar'

    _.snakeCase("--FOO-BAR--");
    // => 'foo_bar'
  };
  // 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代
  getFun = () => {
    var object = { a: [{ b: { c: 3 } }] };

    _.get(object, "a[0].b.c");
    // => 3

    _.get(object, ["a", "0", "b", "c"]);
    // => 3

    _.get(object, "a.b.c", "default");
    // => 'default'
  };

  randomFun = () => {
    _.random(0, 5);
    // => an integer between 0 and 5

    _.random(5);
    // => also an integer between 0 and 5

    _.random(5, true);
    // => a floating-point number between 0 and 5

    _.random(1.2, 5.2);
    // => a floating-point number between 1.2 and 5.2
  };

  upperFirstFun = () => {
    _.upperFirst("fred");
    // => 'Fred'

    _.upperFirst("FRED");
    // => 'FRED'

    console.log(_.upperFirst("product_listings"));
    // => 'Product_listings'

    console.log(_.upperFirst("-product-listings-"));
    // => '-product-listings-'
  };

  render() {
    const { curFun } = this.state;
    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a lodash function"
          optionFilterProp="label"
          filterOption={this.filterOption}
          onSelect={this.onSelect}
        >
          {lodashList.map((g) => (
            <OptGroup label={g.type} key={g.type}>
              {g.funs.map((i) => (
                <Option value={i.value} label={i.cb} key={i.value}>
                  {i.value}
                </Option>
              ))}
            </OptGroup>
          ))}
        </Select>
        <Button onClick={curFun}>lodashFun</Button>
        {_.times(3, (id) => (
          <div key={id}>{id}</div>
        ))}
      </div>
    );
  }
}

export default ClassRoute;
