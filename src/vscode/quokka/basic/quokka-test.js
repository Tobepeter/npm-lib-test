// 这是一个基本的 Quokka.js 演示
// Quokka 会实时运行代码并显示结果

// 简单的数学运算
const a = 10
const b = 20
const sum = a + b
console.log('sum:', sum) // Quokka 将显示: sum: 30

// 数组操作
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((n) => n * 2)
console.log('doubled array:', doubled) // Quokka 将显示: doubled array: [2, 4, 6, 8, 10]

// 对象操作
const person = {
  name: '张三',
  age: 25,
}
console.log('person:', person) // Quokka 将显示整个对象

// 使用内置函数
const date = new Date()
console.log('current date:', date) // Quokka 将显示当前日期时间

// 条件语句
const score = 85
if (score >= 80) {
  console.log('优秀!') // Quokka 将显示: 优秀!
}

// 循环示例
let total = 0
for (let i = 1; i <= 5; i++) {
  total += i
}
console.log('sum of 1-5:', total) // Quokka 将显示: sum of 1-5: 15
