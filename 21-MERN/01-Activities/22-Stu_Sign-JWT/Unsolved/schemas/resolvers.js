const { User, Thought } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("thoughts"); // Fetching all users and populating their 'thoughts' field
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("thoughts"); // Finding a user by username and populating their 'thoughts' field
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 }); // Finding thoughts based on username or returning all thoughts sorted by creation date.
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId }); // Finding a thought by its ID
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args); // Creating a new user based on the provided arguments
      const token = signToken(user); // Generating a token for the newly created user

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }); // finding User by email.

      if (!user) {
        throw AuthenticationError; // Throwing an AuthenticationError if the user is not found
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user); // Generating a token for the authenticated user
      return { token, user }; // Returning the token and user information
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
