const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const listSchema = new Schema ({
	name:  { type: String, required: true },
	description: { type: String },

	owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	tasks: [ { type: Schema.Types.ObjectId, ref: 'Task' } ]
})

class List {
}

listSchema.loadClass(List)
module.exports = mongoose.model('List', listSchema)
