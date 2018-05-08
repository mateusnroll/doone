const User = require('../models/user')

class Registrationcontroller extends BaseController {
	new(req, res) {
		super.render('registration/new', res)
	}

	create(req, res) {
		const user = new User({
			email: req.body.email,
			password: req.body.password
		})
		user.save(err => {
			if (err) console.log(err)
			else console.log('saved!')
		})
	}
}

module.exports = { Registrationcontroller }
