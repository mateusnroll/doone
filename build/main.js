'use strict';

var _stimulus = require('stimulus');

var _task_controller = require('task_controller');

var application = _stimulus.Application.start();
application.register('task', _task_controller.TaskController);

console.log('i am working! loko');