import React from "react";
import { Select, Spin } from "antd";

import debounce from "lodash/debounce";
import { sites } from "@common/mockArray";

import styles from "./index.less";

const { Option } = Select;
class AntSelect extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  componentDidMount() {
    // document.getElementById('select').onmousedown = (e) => {
    //   if(e && e.preventDefault) {
    //     e.preventDefault();
    //   }
    // }
    this.autocomplete(document.getElementById("myInput"), sites);
  }

  /*自动填充函数有两个参数，input 输入框元素和自动填充的数组*/
  autocomplete = (inp, arr) => {
    let currentFocus;
    /* 监听 input 输入框，当在 input 输入框元素中时执行以下函数*/
    inp.addEventListener("input", function (e) {
      let a,
        b,
        i,
        val = this.value;
      /*关闭已打开的自动填充列表*/
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*创建 DIV 元素用于放置自动填充列表的值*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      // element.className = 'xxxClass';
      /*DIV 作为自动填充容器的子元素*/
      this.parentNode.appendChild(a);
      /*循环数组*/
      for (i = 0; i < arr.length; i++) {
        /*检查填充项是否有与文本字段值相同的内容，不区分大小写*/
        if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /*为每个匹配元素创建一个 DIV 元素 */
          b = document.createElement("DIV");
          /*匹配项加粗*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*选中的填充项插入到隐藏 input 输入字段，用于保存当前选中值*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*当有人点击填充项（DIV 元素）时执行函数*/
          b.addEventListener("click", function (e) {
            /*选中的填充项插入到隐藏 input 搜索字段*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*关闭自动填充列表*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*按下键盘上的一个键时执行函数*/
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode === 40) {
        /*如果按下箭头向下键，currentFocus 变量加 1，即向下移动一位*/
        currentFocus++;
        /*使当前选中项更醒目*/
        addActive(x);
      } else if (e.keyCode === 38) {
        //up
        /*按下箭头向上键，选中列表项向上移动一位*/
        currentFocus--;
        /*使当前选中项更醒目*/
        addActive(x);
      } else if (e.keyCode === 13) {
        /*如果按下 ENTER 键，阻止提交，你也可以设置 submit 提交*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*模拟点击选中项*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*设置选中的选项函数*/
      if (!x) return false;
      /*移动选项设置不同选中选项的背景颜色*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /*添加 "autocomplete-active" 类*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*移除没有选中选项的 "autocomplete-active" 类*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*关闭自动添加列表*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  };

  fetchUser = (value) => {
    console.log("fetching user", value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((body) => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map((user) => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleChange = (value) => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };

  preview = () => {
    console.log("子组件方法被父组件调用");
  };

  render() {
    const { fetching, data, value } = this.state;
    return (
      <div className={styles.selectWrap}>
        <Select
          mode="multiple"
          labelInValue
          value={value}
          placeholder="Select users"
          notFoundContent={fetching ? <Spin size="small" /> : null}
          filterOption={false}
          onSearch={this.fetchUser}
          onChange={this.handleChange}
          style={{ width: "200px" }}
        >
          {data.map((d) => (
            <Option
              key={d.value}
            >{`${d.text}     '模版字符串的空格会保留，这里空格不起作用'    ${d.value}`}</Option>
          ))}
        </Select>
        {/* autocomplete="off" 确保表单已关闭自动填充功能 */}
        <form
          autoComplete="off"
          action="/index.php"
          className={styles.formWrap}
        >
          <div className={styles.autoComplete} style={{ width: "300px" }}>
            <input
              id="myInput"
              type="text"
              name="s"
              placeholder="请输入搜索内容"
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default AntSelect;
