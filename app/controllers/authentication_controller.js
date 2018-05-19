class AuthenticationController extends BaseController {
	new(req, res) {
		super.render('authentication/new', res)
	}

	async create(req, res, next) {
		try {
			const user = await User.findByEmail(req.body.email)
			const validPassword = await user.comparePassword(req.body.password)

			if(validPassword) {
				const session = await SessionService.create(user)
				req.session.uniqueId = session.id
				super.redirect('/lists', res)
			} else {
				req.flash('errors', 'Invalid email or password')
				super.redirect('/login', res)
			}
		} catch (e) {
			next(e)
		}
	}
}

module.exports = { AuthenticationController }
