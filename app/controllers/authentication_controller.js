const User = require('../models/user')

class AuthenticationController extends BaseController {
	new(req, res) {
		super.render('authentication/new', res)
	}

	async create(req, res, next) {
		try {
			const user = await User.findByEmail(req.body.email)
			console.log(user)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = { AuthenticationController }
