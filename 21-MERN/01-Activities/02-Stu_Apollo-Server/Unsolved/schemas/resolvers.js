const { Class } = require('../models');

// Create a fucntion that will fullfill the queries defined in 'typeDefs.js'
const resolvers = {
  Query: {
    classes: async () => {
      // Get and return all documents from the classes collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
