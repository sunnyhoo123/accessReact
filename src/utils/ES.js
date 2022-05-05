// 返回网页上突出显示或选定的文本
const padStartFun = () => {
  "abc".padStart(10); // "       abc"
  "abc".padStart(10, "foo"); // "foofoofabc"
  "abc".padStart(6, "123465"); // "123abc"
  "abc".padStart(8, "0"); // "00000abc"
  "abc".padStart(1); // "abc"

  const now = new Date();
  const year = now.getFullYear();
  // 月份和日期 如果是一位前面给它填充一个0
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  console.log(year, month, day);
  console.log(`${year}-${month}-${day}`); //输入今天的日期 2021-12-31

  const tel = "18781268679";
  const newTel = tel.slice(-4).padStart(tel.length, "*");
  console.log(newTel); // *******8679
};

// 验证参数是否为json格式
const validJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
};

// 在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过 window、self 取到全局对象，在 Node.js 中，它们都无法获取，必须使用 global。
// 在松散模式下，可以在函数中返回 this 来获取全局对象，但是在严格模式和模块环境下，this 会返回 undefined。

const getGlobal = () => {
  // if (typeof self !== "undefined") {
  //   return self;
  // }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("无法找到全局对象");
};

const globals = getGlobal();
console.log(globals);

const allSettled = (json) => {
  const promise1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise1");
        //   reject("error promise1 ");
      }, 3000);
    });
  };
  const promise2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise2");
        //   reject("error promise2 ");
      }, 1000);
    });
  };
  const promise3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //   resolve("promise3");
        reject("error promise3 ");
      }, 2000);
    });
  };

  //  Promise.all 会走到catch里面
  Promise.all([promise1(), promise2(), promise3()])
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log("error", error); // error promise3
    });

  // Promise.allSettled 不管有没有错误，三个的状态都会返回
  Promise.allSettled([promise1(), promise2(), promise3()])
    .then((res) => {
      console.log(res);
      // 打印结果
      // [
      //    {status: 'fulfilled', value: 'promise1'},
      //    {status: 'fulfilled',value: 'promise2'},
      //    {status: 'rejected', reason: 'error promise3 '}
      // ]
    })
    .catch((error) => {
      console.log("error", error);
    });
};
// import()可以在需要的时候，再加载某个模块。
// button.addEventListener('click', event => {
//   import('./dialogBox.js')
//   .then(dialogBox => {
//     dialogBox.open();
//   })
//   .catch(error => {
//     /* Error handling */
//   })
// });

export { padStartFun, validJSON };
