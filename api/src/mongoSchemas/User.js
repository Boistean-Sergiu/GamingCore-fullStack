const mongoose = require('mongoose')
const { Schema } = mongoose
const ErrorLogging = require('../datasources/log')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

UserSchema.statics.findUser = function (email, password) {
    const errorLogging = new ErrorLogging()
    return this.findOne({ email })
        .then(user => {
            if (!user) {
                errorLogging.notFoundError('User', 'Email not found in user collection')

                return
            }

            if (user.password !== password) {
                errorLogging.notFoundError('User', 'Wrong email-password pairing')

                return
            }

            return user
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = User = mongoose.model('users', UserSchema)