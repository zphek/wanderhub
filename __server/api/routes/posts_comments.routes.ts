import express from "express";
const Router = express.Router();
const {createUser, getUser, getUsers, signIn} = require("../controllers/user.controllers.ts");

Router
.post("/createUser", createUser)
.get("/getUser", getUser)
.get("/getUsers", getUsers)
.get("/signin", signIn)

export default Router;