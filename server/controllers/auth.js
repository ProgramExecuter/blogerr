import User from "../models/user.js";

// Signup a new User
const signup = async (req, res) => {
  const newUser = new User(req.body);

  await newUser.save();

  res.status(200).json(newUser);
};

// Login an existing User
const login = async (req, res) => {
  res.status(200).json({ message: "Login a user" });
};

// Logout the current User
const logout = async (req, res) => {
  res.status(200).json({ message: "Logout current user" });
};

export { signup, login, logout };
