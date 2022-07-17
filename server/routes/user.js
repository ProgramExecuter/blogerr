import express from "express";

const router = express.Router();

// EDIT A USER
router.patch("/:userId", (req, res) => {
  res
    .status(200)
    .json({ message: `Edit user details of user id: ${req.params.userId}` });
});

// DELETE A USER
router.patch("/:userId", (req, res) => {
  res
    .status(200)
    .json({ message: `Delete user with id: ${req.params.userId}` });
});

export default router;
