class TasksController extends BaseController {
	index(req, res) {
		super.render('tasks/index', res)
	}
}

module.exports = { TasksController }
