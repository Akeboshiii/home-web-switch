import express from 'express'

const app = express()
const store = []

app.use(express.json())

app.get('/', (req, res) => {
  res.send('good')
})

app.post('/', (req, res) => {
  store.push(req.body)
  res.json({ message: 'Saved in memory', data: store })
})

app.get('/data', (req, res) => {
  res.json(store)
})

// Instead of app.listen, just export the handler
export default app
