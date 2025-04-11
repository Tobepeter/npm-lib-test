import { createServer, request } from 'node:http'

// 创建 HTTP 服务器
function startServer() {
  const server = createServer((req, res) => {
    console.log('收到请求:', {
      method: req.method,
      url: req.url,
      headers: req.headers,
    })

    // 设置响应头
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'Hello',
    })

    // 处理请求体
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', () => {
      // 构建响应数据
      const responseData = {
        message: '请求已收到',
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: body ? JSON.parse(body) : null,
      }

      // 发送响应
      res.end(JSON.stringify(responseData))
    })
  })

  // 监听端口
  server.listen(3000, () => {
    console.log('HTTP 服务器启动在端口 3000')
  })

  return server
}

// 创建 HTTP 客户端请求
function makeRequest() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/test',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer test-token',
    },
  }

  const req = request(options, (res) => {
    console.log('状态码:', res.statusCode)
    console.log('响应头:', res.headers)

    let responseData = ''
    res.on('data', (chunk) => {
      responseData += chunk
    })

    res.on('end', () => {
      console.log('响应体:', JSON.parse(responseData))
    })
  })

  // 发送请求体
  const requestBody = {
    message: '你好，服务器！',
    timestamp: new Date().toISOString(),
  }
  req.write(JSON.stringify(requestBody))
  req.end()
}

function main() {
  const server = startServer()

  // 等待服务器启动后发送请求
  server.on('listening', () => {
    makeRequest()
  })
}

main()
