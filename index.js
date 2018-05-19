require('./framework/main').init()

const express    = require('express')
const app        = express()
const routes     = require('./config/routes')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const session    = require('express-session')
const flash      = require('connect-flash')

/* MongoDB connection setup */
const dbUrl = 'mongodb://127.0.0.1/doone'
mongoose.connect(dbUrl)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

/* Session setup */
const sessionConfig = {
	secret: 'ABC',
	cookie: { maxAge: 60000 },
	resave: false,
	saveUninitialized: false
}
app.use(session(sessionConfig))
app.use(flash())

/* Bodyparser setup */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./build'))
app.use('/', routes)
app.listen(3000, () => console.log('Up on port 3000'))
