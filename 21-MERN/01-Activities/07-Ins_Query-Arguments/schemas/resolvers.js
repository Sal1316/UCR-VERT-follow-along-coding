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
      return await Class.findById(args.id).populate("professor");
    },
  },
};

module.exports = resolvers;


/* NOTES: 
- Why does the 'class' query have parameters? 
  bc, you are getting only one item so you pass in the item to get the id out.


*/ 