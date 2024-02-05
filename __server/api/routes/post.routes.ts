import express from "express";
const Router = express.Router();
import controllers from "../controllers/post.controllers";

const {createPost, deletePost, getPosts, getPostsByUser}:controllers = new controllers;

Router
.post("/createPost", createPost)
.get("/deletePost", deletePost)
.get("/getPosts", getPosts)
.get("/getPostsBy/:username", getPostsByUser)

export default Router;