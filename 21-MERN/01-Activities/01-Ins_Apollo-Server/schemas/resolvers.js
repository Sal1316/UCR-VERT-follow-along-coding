const { Class } = require("../models");

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },
  },
};

module.exports = resolvers;

/* NOTES: 
- 'Query' is the searches, and 'classes' is the entry point specified in our typeDefs, 
- its async bc we are attaching it to mangoDB.
- gets exported out then imported into the server.js

*/
