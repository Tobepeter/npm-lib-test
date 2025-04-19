import { AnimationLoop } from 'animation-loop'

// shim
if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 16)
  }
}
if (!global.cancelAnimationFrame) {
  global.cancelAnimationFrame = (id) => {
    clearTimeout(id)
  }
}

function test_animation_loop() {
  const loop = new AnimationLoop()
  loop.addAnimationFn((deltaTime, elapsedTime) => {
    console.log(deltaTime, elapsedTime)
    return !(elapsedTime > 5)
  })
  loop.start()
}

function main() {
  test_animation_loop()
}

main()
