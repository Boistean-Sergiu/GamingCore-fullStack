const mongoose = require('mongoose');
const { UserInputError } = require('apollo-server');
const { User } = require('../mongoSchemas');
const { emailValidation } = require('../validations');

module.exports = resolvers = {
  Query: {
    getUsers: async (_, __, { dataSources }) => {
      return dataSources.steamAPI.getSteamAPIList();
    },

    findUser: async (_, { email, password }, __) => {
      return User.findUser(email, password);
    }
  },
  Mutation: {
    register: async (_, { username, email, password, retypedPassword }, __) => {
      //   const userExists = User.userExists(email);
      //   return emailValidation(email);

      if (!emailValidation(email)) {
        throw new UserInputError('Email invalid');
      }

      if (password !== retypedPassword) {
        throw new UserInputError('Password-urile nu coincid');
      }

      return emailValidation(email);
    },
    addUser: async (_, { username, email, password }, ___) => {
      const user = new User({
        username,
        email,
        password,
        created_at: Date.now()
      });

      user
        .save()
        .then(user => {
          user.id = user._id;
          delete user._id;
          delete user._v;
          return user;
        })
        .catch(err => console.error(err));
      return user;
    }
  }
};
