const express = require('express')
const r       = express.Router()

r.get ('/', PublicHomeController.index)

r.get ('/login', AuthenticationController.new)
r.post('/login', AuthenticationController.create)

r.get ('/register', RegistrationController.new)
r.post('/register', RegistrationController.create)

r.get ('/lists', AuthenticationService.protect, ListsController.index)
r.get ('/lists/new', AuthenticationService.protect, ListsController.new)
r.post('/lists', AuthenticationService.protect, ListsController.create)
r.get ('/lists/:id', AuthenticationService.protect, ListsController.show)

r.post('/lists/:listId/tasks', AuthenticationService.protect, TasksController.create)

module.exports = r