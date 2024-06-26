// 默认后缀: 当您使用 require('module') 时,Node.js 会自动查找以下后缀名的文件:
// .js
// .json
// .node

const test_cjs = require('./test-cjs')
// const test_mjs = require("./test-mjs.mjs");
const test_json = require('./test-json')

console.log(test_cjs)
// console.log(test_mjs);
console.log(test_json)
