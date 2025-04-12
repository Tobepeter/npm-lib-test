import debug from 'debug'
import delay from 'delay'

async function test_basic() {
  const log = debug('app:main')
  log.enabled = true
  log('hello')
  log('hello world')
  await delay(1000)
  log('hello world 2')
}

function main() {
  test_basic()
}

main()
