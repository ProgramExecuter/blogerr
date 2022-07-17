import express from "express";

import { signup, login, logout } from "../controllers/auth.js";

const router = express.Router();

// SIGNUP USER
router.post("/signup", signup);

// LOGIN USER
router.post("/login", login);

// LOGOUT USER
router.get("/logout", logout);

export default router;
