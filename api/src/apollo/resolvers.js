const mongoose = require('mongoose')
const User = require('../mongoSchemas/User')

module.exports = resolvers = {
    Query: {
        getUsers: async (_, __, { dataSources }) => {
            return dataSources.steamAPI.getSteamAPIList()
        },

        findUser: async (_, { email, password }, __) => {
            return User.findUser(email, password)
        }
    },
    Mutation: {
        addUser: async (_, { username, email, password }, ___) => {

            const user = new User({
                username,
                email,
                password,
                created_at: Date.now()
            })

            user
                .save()
                .then(user => {
                    user.id = user._id
                    delete user._id
                    delete user._v
                    return user
                })
                .catch(err => console.error(err))
            return user
        }
    }
}