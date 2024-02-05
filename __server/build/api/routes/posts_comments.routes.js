"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const { createUser, getUser, getUsers, signIn } = require("../controllers/user.controllers.ts");
Router
    .post("/createUser", createUser)
    .get("/getUser", getUser)
    .get("/getUsers", getUsers)
    .get("/signin", signIn);
exports.default = Router;
