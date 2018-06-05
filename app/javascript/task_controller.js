const Stimulus = require('stimulus')

class TaskController extends Stimulus.Controller {
	static get targets() {
		return ['completed', 'completeForm']
	}

	complete() {
		this.completedTarget.disabled = true
		this.completeFormTarget.submit()
	}
}

module.exports = TaskController
