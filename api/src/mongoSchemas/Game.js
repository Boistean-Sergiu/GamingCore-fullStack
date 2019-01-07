const { Schema, model } = require('mongoose')

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [Schema.Types.ObjectId],
        ref: 'tags'
    },
    owners: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    activePlayers: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    }
})

module.exports = Game = model('games', GameSchema)