import express from "express";
import dotenv from "dotenv";

import postRoute from "./routes/post.js";

const app = express();

// .ENV SETUP
dotenv.config();
app.use("/post", postRoute);

// SERVER SETUP
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`);
});
