const express = require("express");
// Import the ApolloServer class
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

/* Import the two parts of a GraphQL schema
  - typeDefinitions: define the schema or basically the shape of our data. Like models.
  - resolvers: functions responsible for populating the data inside of a field.*/
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start(); // the reason we wrap this body code with a function is bc 'server.start() is an async fucntion so we need to wrap it in an async function.

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server)); // endpoint for the apollo sanbox.

  // we attach the event listenr to the DB, and once DB is open, we start the express server and console.log the following.
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
