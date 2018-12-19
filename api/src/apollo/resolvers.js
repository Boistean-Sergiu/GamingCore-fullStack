

module.exports = resolvers = {
    Query: {
        getUsers: async (_, __, { dataSources }) => {
            return dataSources.steamAPI.getSteamAPIList()
        }
    }
}