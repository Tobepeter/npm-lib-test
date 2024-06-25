
## 直接调用
##SyntaxError: Cannot use import statement outside a module
## import { say } from "./lib/esm-lib.js";
## ^^^^^^
# node ./esm-test.js


## 使用 experimental-modules
node --experimental-modules ./esm-test.js


