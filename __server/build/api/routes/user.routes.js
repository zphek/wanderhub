"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const { signIn, createUser, getUser, getUserById, getUsers } = new user_controllers_1.default;
Router
    .post("/createUser", createUser)
    .get("/getUser", getUser)
    .get("/getUserBy/:username", getUserById)
    .get("/getUsers", getUsers)
    .post("/signin", signIn);
exports.default = Router;
