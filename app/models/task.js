const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const taskSchema = new Schema ({
    name:        { type: String, required: true },
	description: { type: String },

    owner:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assignee: { type: Schema.Types.ObjectId, ref: 'User' }
})

class Task {
}

taskSchema.loadClass(Task)
module.exports = mongoose.model('Task', taskSchema)
