import express from 'express'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const app = express()
const PORT = 3000

const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const dataFile = path.resolve(__dirname, 'public/data.json')

app.use(express.json())

app.use('/', express.static(path.resolve(__dirname, 'public')))
app.get('/', (req, res) => {
    res.status(200).send('good')
})
app.post('/', async (req, res) => {
    try {
        let data = []
    
        const file = await fs.readFile(dataFile, 'utf-8')
        data = JSON.parse(file)
        data.push(req.body)
    
        await fs.writeFile(dataFile, JSON.stringify(data, null, 2))
    } catch (error) {
        res.status(500).send('Failed to save')
    }
})

// app.get('/  ')

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})