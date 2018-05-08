require('./framework/main').init()

const express    = require('express')
const app        = express()
const routes     = require('./config/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./build'))
app.use('/', routes)
app.listen(3000, () => console.log('Up on port 3000'))
