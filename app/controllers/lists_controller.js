class ListsController extends BaseController {
	index(req, res) {
		super.render('lists/index', res)
	}

	new(req, res) {
		super.render('lists/new', res, { errors: req.flash('errors') })
	}

	async create(req, res) {
		const list = await List.create({
			name: req.body.name,
			description: req.body.description,
			owner: req.user.id
		})

		super.redirect(`/lists/${list.id}`, res)
	}

	async show(req, res) {
		const list = await List.findById(req.params.id).populate('tasks')
		super.render('lists/show', res, { list })
	}
}

module.exports = { ListsController }
