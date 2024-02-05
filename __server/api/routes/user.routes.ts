import express from "express";
const Router = express.Router();
import controllers from "../controllers/user.controllers";

const {signIn, createUser, getUser, getUserById, getUsers}:controllers = new controllers;

Router
.post("/createUser", createUser)
.get("/getUser", getUser)
.get("/getUserBy/:username", getUserById)
.get("/getUsers", getUsers)
.post("/signin", signIn)

export default Router;