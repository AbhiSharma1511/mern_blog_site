import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 8800;

app.use(express.json());
app.use("/api/posts", postRoutes);
// app.use("/api/posts/",userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`Server runs on port: ${PORT}`);
});
