const mongoose   = require('mongoose')
const Schema     = mongoose.Schema
const timestamps = require('mongoose-timestamp')

const taskSchema = new Schema ({
	title:       { type: String, required: true },
	description: { type: String },

	list:     { type: Schema.Types.ObjectId, ref: 'List', required: true },
	owner:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
	assignee: { type: Schema.Types.ObjectId, ref: 'User' }
})

class Task {
}

taskSchema.plugin(timestamps)
taskSchema.loadClass(Task)
module.exports = mongoose.model('Task', taskSchema)
