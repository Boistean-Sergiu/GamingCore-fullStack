module.exports = typeDefs = `
    type Mutation {
        signup(email: String!, password: String!, username: String!): AuthPayload
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
    }
`