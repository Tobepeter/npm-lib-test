import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/json', (req, res) => {
  res.json({
    name: 'John',
    age: 20,
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
