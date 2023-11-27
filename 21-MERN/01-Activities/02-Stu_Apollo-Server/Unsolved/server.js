const express = require('express');
// Import the ApalloServer class and express/middleware function helper fucntion
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// import the two parts of graphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
}); // puts typeDefs and resolvers together and alows us to use the queries. it takes care of the routing.

const app = express();

// Create a new instance of Apollo server with GraphQL schema.
const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server)); // this give us the sandbox studio page.

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    })
  })
};

// call the async function to start the server.
startApolloServer();
