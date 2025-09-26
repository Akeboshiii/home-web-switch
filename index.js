import express from 'express'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const app = express()
const PORT = 3000

const __filename = url.fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`port: ${PORT}`)
})