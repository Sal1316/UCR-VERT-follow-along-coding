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
      return await Professor.find({}).populate("classes");
    },
    class: async (parent, args) => {
      return await Class.findById(args.id);
    },
  },
};

module.exports = resolvers;
