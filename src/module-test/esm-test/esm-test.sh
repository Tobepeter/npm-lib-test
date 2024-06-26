
## 直接调用
##SyntaxError: Cannot use import statement outside a module
## import { say } from "./lib/esm-lib.js";
## ^^^^^^
# node ./esm-test.js


## 使用 experimental-modules
## 参考 https://juejin.cn/post/7216584694792929337
## 参考：https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html
## 注意，依然要遵循目录内 package.json 的 type: module

## 旧版Node，使用Node的试验特性，在启动时使用命令node --experimental-modules，并配合如下的其中一种模式与之配合开启：
## 注：使用该试验特性后，所有的import都要写完整文件的名称，不能省略文件拓展名
## 参考：https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html
# node --experimental-modules ./esm-test.js

# node --input-type=module ./esm-test.js


