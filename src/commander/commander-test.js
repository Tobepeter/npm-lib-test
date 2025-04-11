import { program } from 'commander'

function test_multi_same_option() {
  program
    .version('1.0.0')
    .description('一个简单的命令行工具')
    .option('-n, --name <name>', '你的名字')
    .option('-s, --setting <value>', '设置选项，可以多次使用', (value, previous) => {
      if (value.includes('=')) {
        const [key, val] = value.split('=')
        return { ...previous, [key]: val }
      } else {
        return { ...previous, [value]: true }
      }
    }, {})
    .action((options) => {
      console.log('所有选项:', options)
      console.log('设置选项:', options.setting)
    })
  program.parse(process.argv)
}

function main() {
  test_multi_same_option()
}

main()
