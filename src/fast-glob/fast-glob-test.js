import fastGlob from 'fast-glob'
import { dirname } from 'dirname-filename-esm'
import path from 'path'

const __dirname = dirname(import.meta)
const dir = path.join(__dirname, 'dir')

const test_fast_glob = async () => {
  /**
   * fast-glob对比fs
   *
   * 1. 默认不匹配隐藏文件
   * 2. 支持仅仅选中文件
   *
   * 这点就可以代替我们平时递归获取文件了
   */
  const files = await fastGlob('**/*', {
    recursive: true,
    cwd: dir, // // 指定搜索的目录，默认 process.cwd()
    // dot: true, // 是否匹配隐藏文件，默认 false
    // ignore: ['**/*.js'], // 忽略匹配的文件
    // absolute: true, // 是否返回绝对路径，默认 false
    onlyFiles: true, // 是否只匹配文件，默认 false
    // onlyDirectories: true, // 是否只匹配目录，默认 false
    // deep: 1, // 指定搜索的深度，默认 Infinity
    // globstar: true, // 支持 ** 语法
    // caseSensitiveMatch: true, // 区分大小写匹配
    // followSymbolicLinks: true, // 是否跟踪符号链接，默认 true
    // braceExpansion: true, // 支持 {a,b} 扩展
  })
  console.log(files)
}

const main = async () => {
  await test_fast_glob()
}

main()
