import express from "express";

const router = express.Router();

// GET ALL POSTS
router.get("/", (req, res) => {
  res.status(200).json({ message: "All Posts Fetched" });
});

// GET A PARTICULAR POST
router.get("/:postId", (req, res) => {
  res.status(200).json({ message: `Got post with Id: ${req.params.postId}` });
});

// CREATE A POST
router.post("/", (req, res) => {
  res.status(200).json({ message: "Created New Post" });
});

// EDIT A PARTICULAR POST
router.patch("/:postId", (req, res) => {
  res
    .status(200)
    .json({ message: `Editing post with Id: ${req.params.postId}` });
});

// DELETE A PARTICULAR POST
router.delete("/:postId", (req, res) => {
  res
    .status(200)
    .json({ message: `Deleting post with Id: ${req.params.postId}` });
});

export default router;
