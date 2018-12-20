module.exports = typeDefs = `
    type Mutation {
        signup(email: String!, password: String!, username: String!): AuthPayload
        addUser(email: String!, password: String!, username: String!): User!
    }
    type AuthPayload{
        token: String
        user: User
    }
    type User {
        id: ID!
        email: String!
        username: String!
        password: String!
        created_at: String
    }
    type Query {
        getUsers: [User!]!
        findUser(email: String!, password: String!): User
    }
    type Message {
        id: ID!
        from: User!
        to: User!
        created_at: String
        text: String!
    }
    type fanTag{
        id: ID!
        name: String!
        added: [User!]!
    }
    type Game {
        id: ID!
        name: String!
        officialTags: [String!]!
        fanTags: [fanTag!]!
    }
`