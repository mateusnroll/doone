const mongoose   = require('mongoose')
const Schema     = mongoose.Schema
const timestamps = require('mongoose-timestamp')

const taskSchema = new Schema ({
	title:       { type: String, required: true },
	description: { type: String },

	completed:   { type: Boolean, default: false },
	completedAt: { type: Date },

	list:     { type: Schema.Types.ObjectId, ref: 'List', required: true },
	owner:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
	assignee: { type: Schema.Types.ObjectId, ref: 'User' }
})

class Task {
	get pending() {
		return !this.completed
	}

	async complete(userId) {
		if(this.owner != userId) throw new Error('Not the task owner')

		this.completed = true
		this.completedAt = new Date()
		this.save()

		return true
	}

	async uncomplete(userId) {
		if(this.owner != userId) throw new Error('Not the task owner')

		this.completed = false
		this.completedAt = null
		this.save()

		return true
	}
}

taskSchema.plugin(timestamps)
taskSchema.loadClass(Task)
module.exports = mongoose.model('Task', taskSchema)
