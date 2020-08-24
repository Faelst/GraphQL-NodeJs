const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./Resolvers/index')

const server = new ApolloServer({
    typeDefs: importSchema('./Schema/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => console.log(url));
