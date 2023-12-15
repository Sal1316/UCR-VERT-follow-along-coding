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

    // TODO: Add a new resolver for a single Class object. This way allows the user to manually input ex, the Id in the vareables box in sandbox.
    class: async (parent, args) => {
      return await Class.findById(args.id).populate("professor");
    },
    professors: async () => {
      return await Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
