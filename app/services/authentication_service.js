class AuthenticationService {
	async protect(req, res, next) {
		const session = await SessionService.getCurrent(req)
		
		if(session) {
			req.user = session.user
			req.currentSession = session
			next()
		} else {
			req.flash('info', 'You are not logged in')
			res.redirect('/login')
		}
	}
}

module.exports = { AuthenticationService }
