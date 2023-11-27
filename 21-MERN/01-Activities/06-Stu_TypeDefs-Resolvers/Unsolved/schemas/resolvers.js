const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      }); // the .populate("classes")..populate("professors"); will return like a nested object within an object. makes it so you can access the classes from the professors entry point.
    },

    classes: async () => {
      return await Class.find({}).populate("professor");
    },

    professors: async () => {
      return await Professor.find({}).populate("classes");  // .populate("classes") makes it so you can access the classes from the professors entry point.
    },
  },
};

module.exports = resolvers;
