import concurrently from 'concurrently'

function test_simple() {
  concurrently(
    [
      { command: 'echo "第一个命令"', name: 'command1' },
      { command: 'echo "第二个命令"', name: 'command2' },
    ],
    {
      /**
       * prefix
       * - 'name': 使用命令的名称作为前缀
       * - 'index': 使用命令的索引作为前缀
       * - 'time': 使用时间戳作为前缀
       * - 'command': 使用命令本身作为前缀
       * - 'none': 不使用前缀
       */
      prefix: 'name',
      prefixColors: ['red', 'green'],
      killOthers: ['failure', 'success'],
      restartTries: 3,
    }
  )
}

function test_npm() {
  concurrently(
    [
      // NOTE: npm: 是 concurrently 内置的，行为和 npm run 一致
      { command: 'npm:concurrently:echo1', name: 'echo1' },
      { command: 'npm:concurrently:echo2', name: 'echo2' },
    ],
    {
      prefix: 'name',
      killOthers: ['failure'],
      restartTries: 3,
    }
  )
}

function main() {
  test_simple()
  // test_npm()
}

main()

