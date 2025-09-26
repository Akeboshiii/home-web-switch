import express from 'express'
import url from 'url'
import path from 'path'

const app = express()
const PORT = 3000

const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

// In-memory storage (resets when server restarts)
const store = []

app.use(express.json())

// Serve static files
app.use('/', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).send('good')
})

// Handle POST requests
app.post('/', (req, res) => {
    store.push(req.body) // Save in memory
    res.json({ message: 'Saved in memory', data: store })
})

// Optional: GET all stored data
app.get('/data', (req, res) => {
    res.json(store)
})

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})
