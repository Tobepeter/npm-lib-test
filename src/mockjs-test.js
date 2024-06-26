import Mock from 'mockjs'

const test_simple = () => {
  const data = Mock.mock({
    'list|1-10': [
      {
        'id|+1': 1,
      },
    ],
  })
}
