import express from "express";
const Router = express.Router();
import controllers from "../controllers/discussion.controllers";

const {createDiscussion, getDiscussion, getDiscussions}:controllers = new controllers;

Router
.post("/createDiscussion", createDiscussion)
.get("/getDiscussion/:id", getDiscussion)
.get("/getDiscussions", getDiscussions)

export default Router;