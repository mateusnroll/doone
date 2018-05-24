const mongoose   = require('mongoose')
const Schema     = mongoose.Schema
const timestamps = require('mongoose-timestamp')

const sessionSchema = new Schema ({
	user:      { type: Schema.Types.ObjectId, ref: 'User', required: true },
	type:      { type: String, required: true }
})

class Session {
}

sessionSchema.plugin(timestamps)
sessionSchema.loadClass(Session)
module.exports = mongoose.model('Session', sessionSchema)
