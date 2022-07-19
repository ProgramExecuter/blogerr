import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  profilePic: String,
  status: String,
  authToken: String,
});

export default mongoose.model("user", userSchema);
