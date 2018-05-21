class Registrationcontroller extends BaseController {
	new(req, res) {
		super.render('registration/new', res, { errors: req.flash('errors') })
	}

	async create(req, res) {
		User.create({
			email: req.body.email,
			password: req.body.password
		})
		.then(() => {
			super.redirect('/login', res)
		})
		.catch(err => {
			switch (err.code) {
				case 11000: // Dup key (dup email)
					req.flash('errors', 'This email already exists')
					super.redirect('/register', res)
					break
				default:
					console.log(err)
					super.redirect('/500', res)
			}
		})
	}
}

module.exports = { Registrationcontroller }
