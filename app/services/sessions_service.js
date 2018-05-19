class SessionsService {
	async create(user, type = 'web') {
		const session = await Session.create({ 
			user: user.id,
			type: type
		})
		return session
	}
}

module.exports = { SessionsService }
