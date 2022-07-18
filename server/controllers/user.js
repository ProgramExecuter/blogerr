import User from "../models/user.js";

// Editing a User
const editUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.userId, { $set: req.body });

  res.status(200).json({ message: "User Edited" });
};

// Deleting a User
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.userId);

  res.status(200).json({ message: "Deleted User" });
};

export { editUser, deleteUser };
