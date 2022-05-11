var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
// 输出全局变量 __filename 的值
console.log(__filename);
// 输出全局变量 __dirname 的值
console.log(__dirname);
console.log("程序执行结束!");
