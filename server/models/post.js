import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: String,
  picUrl: String,
  caption: String,
});

export default mongoose.model("post", postSchema);
