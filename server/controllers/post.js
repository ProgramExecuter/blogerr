// Getting all Posts
const getAllPosts = async (req, res) => {
  res.status(200).json({ message: "All Posts Fetched" });
};

// Get a particulat Post
const getParticularPost = async (req, res) => {
  res.status(200).json({ message: `Got post with Id: ${req.params.postId}` });
};

// Create a new Post
const createPost = async (req, res) => {
  res.status(200).json({ message: "Created New Post" });
};

// Edit a Post
const editPost = async (req, res) => {
  res
    .status(200)
    .json({ message: `Editing post with Id: ${req.params.postId}` });
};

// Delete a Post
const deletePost = async (req, res) => {
  res
    .status(200)
    .json({ message: `Deleting post with Id: ${req.params.postId}` });
};

export { getAllPosts, getParticularPost, createPost, editPost, deletePost };
