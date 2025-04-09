import Mock from 'mockjs'

function test_simple() {
  const data = Mock.mock({
    'list|1-10': [
      {
        'id|+1': 1,
      },
    ],
  })
  console.log('简单示例:', data)
}

function test_string() {
  const data = Mock.mock({
    'string|1-4': '哈',
  })
  console.log('字符串示例:', data)
}

function test_number() {
  const data = Mock.mock({
    'number|1-100': 100,
  })
  console.log('数字示例:', data)
}

function test_boolean() {
  const data = Mock.mock({
    'boolean|1': true,
  })
  console.log('布尔值示例:', data)
}

function test_object() {
  const data = Mock.mock({
    'object|2': {
      name: '@cname',
      age: '@integer(18,60)',
      email: '@email',
    },
  })
  console.log('对象示例:', data)
}

function main() {
  test_simple()
  test_string()
  test_number()
  test_boolean()
  test_object()
}

main()
