import express from "express";

import { editUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

// EDIT A USER
router.patch("/:userId", editUser);

// DELETE A USER
router.patch("/:userId", deleteUser);

export default router;
