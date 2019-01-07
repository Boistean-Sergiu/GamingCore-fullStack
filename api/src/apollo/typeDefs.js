module.exports = typeDefs = `
    type Mutation {
        signup(email: String!, password: String!, username: String!): AuthPayload
        addUser(email: String!, password: String!, username: String!): User!
        register(username: String!,email: String!, password: String!, retypedPassword: String!): Boolean!
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
    type Review {
        id: ID!
        text: String!
        creator: User!
    }
    type Game {
        id: ID!
        name: String!
        officialTags: [String!]!
        fanTags: [fanTag!]
        description: String!
        reviews: [Review!]
    }
`;
