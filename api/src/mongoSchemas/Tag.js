const { Schema, model } = require('mongoose')

const TagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    games: {
        type: [Schema.Types.ObjectId],
        ref: 'games'
    }
})

module.exports = Tag = model('tags', TagSchema)