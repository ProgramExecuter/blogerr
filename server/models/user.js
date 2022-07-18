import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  profilePic: String,
  status: String,
});

export default mongoose.model("user", userSchema);
