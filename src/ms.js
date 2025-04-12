import ms from 'ms'

// 将毫秒数转换为人类可读的字符串：
const msArr = [1500, 60000, 120000, 86400000]
for (const item of msArr) {
  // TODO: 1500会变成2s，有点神奇
  const str = ms(item)
  console.log(`${item}ms -> ${str}`)
}

// 将人类可读的时间字符串转换为毫秒数：
const humanReadableArr = ['1.5s', '1m', '2m', '1d']
for (const item of humanReadableArr) {
  const num = ms(item)
  console.log(`${item} -> ${num}`)
}
