const { Schema, model } = require('mongoose')
// const ErrorLogging = require('../datasources/log')

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    gamesLists: {
        type: [Schema.Types.ObjectId],
        ref: 'games'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    social: {
        youtube: String,
        twitter: String,
        facebook: String,
        instagram: String,
        steam: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = Profile = model('profiles', ProfileSchema)