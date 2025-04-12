import delay from 'delay'

async function test_sleep() {
  console.time('test')
  await delay(2000)
  console.timeEnd('test')
}

function heavyTask() {
  for (let i = 0; i < 10e6; i++) {
    Math.random()
  }
}

function test_heavy() {
  console.time('test heavy')
  heavyTask()
  console.timeEnd('test heavy')
}

test_sleep()
test_heavy()
