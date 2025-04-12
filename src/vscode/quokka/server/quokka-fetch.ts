import fetch from 'node-fetch'

const getLocal = async () => {
  const url = 'http://localhost:3000'
  const response = await fetch(url)
  const data = await response.text()
  return data
}

const getJson = async () => {
  const url = 'http://localhost:3000/json'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const local = await getLocal()
console.log(local)

const json = await getJson()
console.log(json)
