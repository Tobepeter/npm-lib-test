import { Canvas } from 'canvas'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta)

function test_canvas() {
  const canvas = new Canvas(32, 32)
  const ctx = canvas.getContext('2d')

  // === Draw chessboard pattern ===
  const tileSize = 4 // 32/8 for 8x8 board
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#ffffff' : '#000000'
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
    }
  }

  const buffer = canvas.toBuffer()
  // console.log('Chessboard image buffer:', buffer)

  // === Save ===
  fs.writeFileSync(path.join(__dirname, 'chessboard.png'), buffer)

  // === ImageData ===
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  console.log('ImageData:', imageData)
}

function test_hexdump() {
  // NOTE: canvas转buffer其实是附带png的元数据的，不是纯粹的位图信息
  const result = execSync(`hexdump -C ${path.join(__dirname, 'chessboard.png')} | head -n 3`)
  console.log(result.toString())
}

function main() {
  test_canvas()
  test_hexdump()
}

main()
