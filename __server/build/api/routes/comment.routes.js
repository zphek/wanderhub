"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const comments_controllers_1 = __importDefault(require("../controllers/comments.controllers"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const { createComment, getComments } = new comments_controllers_1.default;
Router
    .post("/createComment", auth_1.default, createComment)
    .get("/getCommentsByPost/:id", getComments);
exports.default = Router;
