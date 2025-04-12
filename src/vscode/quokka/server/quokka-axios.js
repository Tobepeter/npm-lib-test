import axios from 'axios'

const getUsers = async () => {
  /**
   * 很难解决的bug
   * 
   * jsonplaceholder 用 node 不知道怎样都是报错
   * AxiosError: Client network socket disconnected before secure TLS connection was established
   */

  const url = `https://jsonplaceholder.typicode.com/users`
  // 配置代理
  const config = {
    proxy: {
      host: '127.0.0.1',
      port: 7890,
    },
    timeout: 10000,
  }
  const users = await axios.get(url, config)
  return users.data
}

const getLocal = async () => {
  const url = 'http://localhost:3000'
  const users = await axios.get(url)
  return users.data
}

// const users = await getUsers()
// console.log(users)

const local = await getLocal()
console.log(local)