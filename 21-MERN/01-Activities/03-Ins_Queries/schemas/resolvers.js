const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: async () => {
      return await Class.find({}).populate("professor");
    },
    professors: async () => {
      return await Professor.find({});
    },
  },
};

module.exports = resolvers;

/* NOTES: 
- whats happening here?  
  ans: we are making functions for quering the DB. In the queries we are using .populate like the 'join' to get the data from other objects so they appear in our query.
  Schools for example has two sub queries, 'classes' and 'professor' that get the professor for those schools.

*/
