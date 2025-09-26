import express from 'express'
import url from 'url'
import path from 'path'

const app = express()
let store = {
    'r1': false,
    'r2': false
}

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('good')
// })

app.use('/', express.static(path.resolve(__dirname, 'public')))
console.log(__dirname)

app.post('/', (req, res) => {
  store = req.body
  res.status(200).send(store)
})

app.get('/data', (req, res) => {
  res.json(store)
})

// Instead of app.listen, just export the handler
// export default app
app.listen(3000)