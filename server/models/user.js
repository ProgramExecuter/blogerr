import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  profilePic: String,
  status: String,
});

export default mongoose.model("user", userSchema);
