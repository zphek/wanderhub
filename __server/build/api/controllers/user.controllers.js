"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
const { createUser, getUser, getUsers, signIn } = new user_services_1.services;
class controllers {
    signIn(req, res) {
    }
    createUser(req, res) {
        const { username, password, url_image } = req.body;
        createUser(username, password, url_image);
        res.send("done!");
    }
    getUser(req, res) {
        const { id } = req.params;
        getUser(id).then(response => {
            res.json(response);
        });
    }
    getUsers(req, res) {
        getUsers()
            .then(response => {
            res.json(response);
        });
    }
}
exports.default = controllers;
