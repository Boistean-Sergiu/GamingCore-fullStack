const { UserInputError } = require('apollo-server');
const { User } = require('../mongoSchemas');
const { emailValidation } = require('../validations');

module.exports = resolvers = {
  Query: {
    getUsers: async () => {
      return User.find()
    },

    findUser: async (_, { email, password }, __) => {
      return User.findUser(email, password);
    }
  },
  Mutation: {
    register: async (_, { username, email, password, retypedPassword }, __) => {
      let user = await User
        .findOne({ username })
      if (user) {
        throw new UserInputError('Username deja folosit')
      }

      if (!emailValidation(email)) {
        throw new UserInputError('Email invalid');
      }

      if (password !== retypedPassword) {
        throw new UserInputError('Password-urile nu coincid');
      }

      let newUser = 

      return {
        username,
        email,
        password
      };
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
