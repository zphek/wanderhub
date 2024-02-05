"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const discussion_controllers_1 = __importDefault(require("../controllers/discussion.controllers"));
const { createDiscussion, getDiscussion, getDiscussions } = new discussion_controllers_1.default;
Router
    .post("/createDiscussion", createDiscussion)
    .get("/getDiscussion/:id", getDiscussion)
    .get("/getDiscussions", getDiscussions);
exports.default = Router;
