import express from "express";
const Router = express.Router();
import controllers from "../controllers/comments.controllers";
import verifyJWT from "../middlewares/auth";

const {createComment, getComments}:controllers = new controllers;

Router
.post("/createComment", verifyJWT, createComment)
.get("/getCommentsByPost/:id", getComments)

export default Router;