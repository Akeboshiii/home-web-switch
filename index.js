import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('good')
})

app.get('/data', (req, res) => {
  res.json(store)
})

// Instead of app.listen, just export the handler
export default app
