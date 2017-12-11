// 编写 promise01.js 实现 github api 的请求

var fetch = require('node-fetch');

fetch('https://api.github.com')
.then(function(res) {
  return res.json();
}).then(function(json) {
  console.log(json);
});