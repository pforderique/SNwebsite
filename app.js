const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const apiPort = 3000

// Serve the static files from the Gatsby app
app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
