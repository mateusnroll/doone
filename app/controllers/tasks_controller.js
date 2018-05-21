class TasksController extends BaseController {
	async create(req, res) {
		try {
			const task = await Task.create({
				title: req.body.title,
				list: req.params.listId,
				owner: req.user.id
			})

			const list = await List.findById(req.params.listId)
			list.tasks.push(task.id)
			await list.save()

			super.redirect(`/lists/${req.params.listId}`, res)
		} catch (e) {
			req.flash('error', e.message)
			super.redirect(`/lists/${req.params.listId}`, res)
		}
	}

	async update(req, res) {
		try {
			const task = await Task.findById(req.params.taskId)

			if(req.body.completed === 'true') {
				task.complete(req.user.id)
			} else if(req.body.completed === 'false') {
				task.uncomplete(req.user.id)
			}

			super.redirect(`/lists/${req.params.listId}`, res)
		} catch (e) {
			req.flash('error', e.message)
			super.redirect(`/lists/${req.params.listId}`, res)
		}
	}
}

module.exports = { TasksController }
