import express from "express";
import dotenv from "dotenv";

import postRoute from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();

// .ENV SETUP
dotenv.config();

// Routes Addition
app.use("/post", postRoute);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// SERVER SETUP
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`);
});
