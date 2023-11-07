const { Post } = require('../models');

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSinglePost(req, res) {
    try {
      const post = await Post.findOne({ _id: req.params.postId });

      if (!post) {
        return res.status(404).json({ message: 'No post with that ID' });
      }

      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new post
  async createPost(req, res) {
    try {
      const dbPostData = await Post.create(req.body);
      res.json(dbPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};


/* VIRTUALS: 
- What are Virtuals? basically give us a way to create computed properties that are not stored in the DB. 
  If you want to include virtuals inside your objects, you have to add them by setting virtuals: true.
  + can use getter and setter withing this fx.
  + can be used to set properties that dont exist in the db. ex, there is a fname, lname, but not fullName. 


*/ 