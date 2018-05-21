class ListsController extends BaseController {
	async index(req, res) {
		const lists = await List
			.find({ owner: req.user.id })
			.sort({ name: 1 })

		super.render('lists/index', res, { lists })
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

		if(list.owner == req.user.id) {
			super.render('lists/show', res, { list })
		} else {
			super.render('lists/404', res)
		}
	}
}

module.exports = { ListsController }
