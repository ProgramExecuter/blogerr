import express from "express";

const router = express.Router();

// SIGNUP USER
router.post("/signup", (req, res) => {
  res.status(200).json({ message: "Register a new user" });
});

// LOGIN USER
router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login a user" });
});

// LOGOUT USER
router.get(200).json({ message: "Logout current user" });

return router;
