const Stimulus = require('stimulus')
const Application = Stimulus.Application.start()

const TaskController = require('./task_controller.js')
Application.register('task', TaskController)
