import whyIsNodeRunning from 'why-is-node-running' // 必须是第一个导入
import { createServer } from 'node:net'

/**
 * 关于 why-is-node-running
 * 主要功能是检查哪些句柄保持进程运行
 */

function startServer() {
  const server = createServer()
  setInterval(() => {}, 1000) // 创建一个定时器
  server.listen(0) // 创建一个 TCP 服务器
}

startServer()
startServer()

// 在一段时间后检查哪些句柄保持进程运行
setImmediate(() => whyIsNodeRunning())
