;(async () => {
  // import是一个通用的适配方案，其实esm也有，但是这里其实是同步加载的
  const hello = await import('./my-app.mjs')
  // 注意，esm 的 default 和 cjs 的 default 是不一样的
  // esm 是占用一个 default 属性，而 cjs 是直接返回一个对象
  console.log(hello.default)
})()
