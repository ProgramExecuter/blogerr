import express from "express";

import {
  getAllPosts,
  getParticularPost,
  createPost,
  editPost,
  deletePost,
} from "../controllers/post.js";

const router = express.Router();

// GET ALL POSTS
router.get("/", getAllPosts);

// GET A PARTICULAR POST
router.get("/:postId", getParticularPost);

// CREATE A POST
router.post("/", createPost);

// EDIT A PARTICULAR POST
router.patch("/:postId", editPost);

// DELETE A PARTICULAR POST
router.delete("/:postId", deletePost);

export default router;
