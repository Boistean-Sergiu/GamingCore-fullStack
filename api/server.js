const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose')
const config = require('./config/config')

const typeDefs = require('./src/apollo/typeDefs')
const resolvers = require('./src/apollo/resolvers')

const SteamAPI = require('./src/datasources/steam')


mongoose
    .connect(config.mongoUrl, { useNewUrlParser: true })
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err))

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        steamAPI: new SteamAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});