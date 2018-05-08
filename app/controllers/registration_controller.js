class Registrationcontroller extends BaseController {
	new(req, res) {
		super.render('registration/new', res)
	}

	create(req, res) {
		console.log(req.body)
	}
}

module.exports = { Registrationcontroller }
