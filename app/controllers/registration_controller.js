class Registrationcontroller extends BaseController {
	new(req, res) {
		super.render('registration/new', res, { errors: req.flash('errors') })
	}

	async create(req, res) {
		try {
			const list = await ListService.createForCurrentUser(req.body.name, req.body.description)
			console.log(list)
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = { Registrationcontroller }
