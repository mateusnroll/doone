const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const sessionSchema = new Schema ({
	user:      { type: Schema.Types.ObjectId, ref: 'User', required: true },
	type:      { type: String, required: true },
	createdAt: { type: Date, required: true }
})

class Session {
	static async addDate() {
		this.createdAt = new Date()
	}
}

sessionSchema.pre('validate', Session.addDate)

sessionSchema.loadClass(Session)
module.exports = mongoose.model('Session', sessionSchema)
