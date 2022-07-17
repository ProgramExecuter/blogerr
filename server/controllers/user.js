// Editing a User
const editUser = async (req, res) => {
  res
    .status(200)
    .json({ message: `Edit user details of user id: ${req.params.userId}` });
};

// Deleting a User
const deleteUser = async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete user with id: ${req.params.userId}` });
};

export { editUser, deleteUser };
