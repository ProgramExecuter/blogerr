import Post from "../models/post.js";

// Getting all Posts
const getAllPosts = async (req, res) => {
  const allPosts = await Post.find();

  res.status(200).json(allPosts);
};

// Get a particulat Post
const getParticularPost = async (req, res) => {
  const reqPost = await Post.findById(req.params.postId);

  res.status(200).json(reqPost);
};

// Create a new Post
const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  await newPost.save();

  res.status(200).json(newPost);
};

// Edit a Post
const editPost = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.postId, { $set: req.body });

  res.status(200).json({ message: "Post Edited" });
};

// Delete a Post
const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.postId);

  res.status(200).json({ message: "Post Deleted" });
};

export { getAllPosts, getParticularPost, createPost, editPost, deletePost };
