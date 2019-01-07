const { Schema, model } = require('mongoose')

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    tags: {
=======
    officialTags: {
        type: [String],
        required: true
    },
    fanTags: [
        {
            name: {
                type: String,
                required: true
            },
            added: {
                type: [Schema.Types.ObjectId],
                ref: 'users'
            }
        }
    ],
    wishers: {
>>>>>>> bd91a8fd943efd4e22dc3564def386d774a7a751
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