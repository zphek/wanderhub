"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const post_controllers_1 = __importDefault(require("../controllers/post.controllers"));
const { createPost, deletePost, getPosts, getPostsByUser } = new post_controllers_1.default;
Router
    .post("/createPost", createPost)
    .get("/deletePost", deletePost)
    .get("/getPosts", getPosts)
    .get("/getPostsBy/:username", getPostsByUser);
exports.default = Router;
