import ora from 'ora'

function test_simple() {
  const spinner = ora('Loading unicorns').start()

  setTimeout(() => {
    spinner.succeed('Loaded unicorns')
  }, 2000)
}

function test_fail() {
  const spinner = ora({
    text: '正在下载文件...',
    spinner: 'dots',
    color: 'yellow',
  }).start()

  setTimeout(() => {
    spinner.fail('下载失败')
  }, 2000)
}

function test_warn() {
  const spinner = ora('正在处理数据').start()

  setTimeout(() => {
    spinner.warn('处理完成，但有警告')
  }, 2000)
}

function test_info() {
  const spinner = ora('正在安装依赖').start()

  setTimeout(() => {
    spinner.info('安装完成，请查看日志')
  }, 2000)
}

function test_stop() {
  const spinner = ora('正在执行任务').start()

  setTimeout(() => {
    spinner.stop()
    console.log('任务已暂停')
  }, 2000)
}

function main() {
  test_simple()
  test_fail()
  test_warn()
  test_info()
  test_stop()
}

main()
