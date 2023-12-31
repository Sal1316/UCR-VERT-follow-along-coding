const { School, Class, Professor } = require('../models'); // importing the models from mongoose.

const resolvers = {
  Query: {
    schools: async () => {
      // Populate the classes and professor subdocuments when querying for schools
      return await School.find({}).populate('classes').populate({
        path: 'classes', // calling populate on classes again to pupulate professor.
        populate: 'professor'
      });
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate('professor');
    },
    professors: async () => {
      return await Professor.find({}); // professors dont have any related data, so we just return all professors.
    }
  }
};

module.exports = resolvers;
