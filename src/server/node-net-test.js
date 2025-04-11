import { createServer } from 'node:net'

// 创建 TCP 服务器
function startServer() {
  const server = createServer((socket) => {
    // 获取客户端信息
    const clientAddress = `${socket.remoteAddress}:${socket.remotePort}`
    console.log(`新的客户端连接: ${clientAddress}`)

    // 设置编码
    socket.setEncoding('utf8')

    // 接收数据
    socket.on('data', (data) => {
      console.log(`收到来自 ${clientAddress} 的数据:`, data)

      // 回显数据给客户端
      socket.write(`服务器收到: ${data}`)
    })

    // 处理错误
    socket.on('error', (err) => {
      console.error(`客户端 ${clientAddress} 发生错误:`, err)
    })

    // 处理连接关闭
    socket.on('close', () => {
      console.log(`客户端 ${clientAddress} 断开连接`)
    })
  })

  // 监听随机端口
  server.listen(0, () => {
    const address = server.address()
    console.log(`服务器启动在端口: ${address.port}`)
  })

  // 处理服务器错误
  server.on('error', (err) => {
    console.error('服务器错误:', err)
  })

  return server
}

function main() {
  const server = startServer()

  // 优雅关闭
  process.on('SIGINT', () => {
    console.log('正在关闭服务器...')
    server.close(() => {
      console.log('服务器已关闭')
      process.exit(0)
    })
  })
}

main()
