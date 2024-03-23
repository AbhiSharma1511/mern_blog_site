import express from "express";
import {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
  getPostGenre,
} from "../../controllers/post.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/?", getPostGenre);
postRouter.get("/:id", getPost);
postRouter.post("/", addPost);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);

export default postRouter;
