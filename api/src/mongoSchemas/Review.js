const { Schema, model } = require('mongoose')

const ReviewSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: 'games'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    },
    helpful: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }]
})

module.exports = Review = model('reviews', ReviewSchema)