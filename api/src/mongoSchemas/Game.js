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
            
        }
    ],
    rating: String,
    wishers: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    owners: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    }
})