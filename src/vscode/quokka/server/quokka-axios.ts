import axios from 'axios'


const getLocal = async () => {
  const url = 'http://localhost:3000'
  const users = await axios.get(url)
  return users.data
}

const getJson = async () => {
  const url = 'http://localhost:3000/json'
  const users = await axios.get(url)
  return users.data
}

const local = await getLocal()
console.log(local)

const json = await getJson()
console.log(json)