// NOTE: Only 'Pro' edition of Quokka.js supports project files import.
// 新版本的nodejs，需要根据 package.json 的 type 来决定是解析策略
const mycjs = require('./mycjs.cjs')

console.log(mycjs)
