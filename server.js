import express from 'express'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const app = express()
const store = []

const __filename = url.pathToFileURL(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('good')
})

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.post('/', (req, res) => {
  store.push(req.body)
  res.json({ message: 'Saved in memory', data: store })
})

app.get('/data', (req, res) => {
  res.json(store)
})

// Instead of app.listen, just export the handler
export default app
