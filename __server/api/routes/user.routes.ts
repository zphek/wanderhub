import express from "express";
const Router = express.Router();
import controllers from "../controllers/user.controllers";

const {signIn, createUser, getUser, getUsers}:controllers = new controllers;

Router
.post("/createUser", createUser)
.get("/getUser/:id", getUser)
.get("/getUsers", getUsers)
.get("/signin", signIn)

export default Router;