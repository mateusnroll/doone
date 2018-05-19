class SessionService {
	async create(user, type = 'web') {
		const session = await Session.create({ 
			user: user.id,
			type: type
		})
		return session
	}

	async getCurrent(req) {
		const sessionId = req.session.uniqueId
		const session = await Session.findById(sessionId).populate('user')

		return session
	}
}

module.exports = { SessionService }
