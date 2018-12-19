const mongoose = require('mongoose')
const { Schema } = mongoose

const LogSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    result: {
        type: JSON,
        required: True
    }
})

module.exports = Log = mongoose.model('logs', LogSchema)