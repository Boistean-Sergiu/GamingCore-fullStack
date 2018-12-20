const { Schema, model } = require('mongoose')

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    officialTags: {
        type: [String],
        required: true
    },
    fanTags: [
        {
            tagName: {
                type: String,
                required: true
            },
            added: {
                type: Int16Array,
                required: true
            }
        }
    ],
    rating: Float32Array,
    wishers: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    owners: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    activePlayers: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    reviews: {
        type: [Schema.Types.ObjectId],
        ref: 'reviews'
    }
})