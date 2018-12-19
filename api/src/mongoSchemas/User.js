const mongoose = require('mongoose')
const { Schema, model } = mongoose

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
    return this.findOne({ email })
        .then(user => {
            if (!user) {
                const Log = model('logs')

                const log = new Log({
                    status: "404",
                    message: "User not found",
                    result: {
                        error: "Email not found in user collection"
                    }
                })

                log.save()
            }

            if (user.password !== password) {
                const Log = model('logs')

                const log = new Log({
                    status: "404",
                    message: "User not found",
                    result: {
                        error: "Wrong email-password pairing"
                    }
                })

                log.save()
            }

            return user
        })
}

module.exports = User = mongoose.model('users', UserSchema)