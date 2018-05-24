const mongoose   = require('mongoose')
const Schema     = mongoose.Schema
const bcrypt     = require('bcrypt')
const timestamps = require('mongoose-timestamp')


const userSchema = new Schema ({
	name:     { type: String },
	email:    { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true },
	photoUrl: { type: String }
})

class User {
	async comparePassword(attempt) {
		const match = await bcrypt.compare(attempt, this.password)
		return match
	}

	static async findByEmail(email) {
		try {
			const user = await this.findOne({ email: email })
			return user
		} catch (e) {
			return e
		}
	}

	static async hashPassword(next) {
		try {
			if (!this.isModified('password')) next()

			const salt = await bcrypt.genSalt(10)
			this.password = await bcrypt.hash(this.password, salt)

			return next()
		} catch (e) {
			return next(e)
		}
	}
}

userSchema.pre('validate', User.hashPassword)

userSchema.plugin(timestamps)
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
