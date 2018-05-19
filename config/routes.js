const express = require('express')
const r       = express.Router()

r.get ('/', PublicHomeController.index)

r.get ('/login', AuthenticationController.new)
r.post('/login', AuthenticationController.create)

r.get ('/register', RegistrationController.new)
r.post('/register', RegistrationController.create)

r.get ('/lists', ListsController.index)

module.exports = r