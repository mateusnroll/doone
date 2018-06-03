const Stimulus = require('stimulus')

class TaskController extends Stimulus.Controller {
	connect() {
		console.log('Hello Stimulus!', this.element)
	}
}

module.exports = TaskController
