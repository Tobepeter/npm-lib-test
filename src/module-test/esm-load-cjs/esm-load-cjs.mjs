// - 虽然文件是mjs，但是只是node的实验功能，并不需要 toplevel import
// - 所有的import都直接翻译成了require
// console.log(123);

// - mjs 可以使用 cjs，但是只能用 default 的（因为nodejs 只支持这个）
// import hello from "./hello.js";

import hello from './hello.mjs'

// - 注意，使用mjs后，貌似必须指定文件后缀
// import hello from "./hello";

console.log(hello)
