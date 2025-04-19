import Tempus from 'tempus'

function test_tempus() {
  function animate(time, deltaTime) {
    console.log('frame', time, deltaTime)
  }
  Tempus.add(animate)
}

function main() {
  test_tempus()
}

main()
