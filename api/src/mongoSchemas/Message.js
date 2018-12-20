const { Schema, model } = require('mongoose')

const MessageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    sent_at: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = Message = model('messages', MessageSchema)