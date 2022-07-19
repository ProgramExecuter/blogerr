import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

// Signup a new User
const signup = async (req, res) => {
  // Hash the password before saving in DB
  const hash = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hash;

  // Save the user in DB
  const newUser = new User(req.body);
  await newUser.save();

  res.status(200).json(newUser);
};

// Login an existing User
const login = async (req, res) => {
  // Find the user with login info
  let userInfo = (await User.find({ username: req.body.username }))[0];

  // Compare the hashed password with the password provided in login form
  bcrypt.compare(req.body.password, userInfo.password).then((result) => {
    if (result) {
      res.status(200).json({ message: "Logged In" });
    } else {
      res.status(200).json({ message: "Wrong password" });
    }
  });
};

// Logout the current User
const logout = async (req, res) => {
  res.status(200).json({ message: "Logout current user" });
};

export { signup, login, logout };
