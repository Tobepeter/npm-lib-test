import { Canvas } from 'canvas'
import fs from 'fs'
import path from 'path'
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

  // === Get image buffer and print ===
  const buffer = canvas.toBuffer()
  // console.log('Chessboard image buffer:', buffer)

  // === Save image to file ===
  fs.writeFileSync(path.join(__dirname, 'chessboard.png'), buffer)
}

function main() {
  test_canvas()
}

main()
