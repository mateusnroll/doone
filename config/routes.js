const express = require('express')
const r       = express.Router()

r.get ('/', PublicHomeController.index)

r.get ('/authentication', AuthenticationController.new)
r.post('/authentication', AuthenticationController.create)

r.get ('/registration', RegistrationController.new)
r.post('/registration', RegistrationController.create)

r.get ('/tasks', TasksController.index)

module.exports = r