import fs from 'fs'
import path from 'path'
import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta)
const dir = path.join(__dirname, 'dir')

// read dir
function test_read_dir() {
  const files = fs.readdirSync(dir, { recursive: true })
  console.log(files)
}

function test_read_dir_withFileTypes() {
  // NOTE: 这个会得到 Dirent(DirectoryEntry) 对象
  // dirrent.name 是文件名
  // dirrent.path 是文件路径
  // dirrent.parentPath 是文件父路径
  // dirrent.isDirectory() 判断是否是目录
  // dirrent.isFile() 判断是否是文件
  // dirrent.isSymbolicLink() 判断是否是符号链接
  // dirrent.isBlockDevice() 判断是否是块设备
  const dir = fs.readdirSync(dir, { withFileTypes: true })
  console.log(dir)
}

function main() {
  test_read_dir()
  // test_read_dir_withFileTypes()
}

main()
