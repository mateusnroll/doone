class AuthenticationController extends BaseController {
	new(req, res) {
		super.render('authentication/new', res)
	}

	create(req, res) {
		console.log(req.body)
	}
}

module.exports = { AuthenticationController }
