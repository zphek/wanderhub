"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const post_services_1 = __importDefault(require("../services/post.services"));
const { createPost, deletePost, getPosts, getPostsByUser } = new post_services_1.default;
class controllers {
    createPost(req, res) {
        const token = req.get("authorization");
        let { CAPTION } = req.body;
        jsonwebtoken_1.default.verify(token, "20040915", (err, decoded) => {
            createPost(CAPTION, decoded.ID_USER)
                .then((response) => {
                if (!response) {
                    res.json({
                        errorMsg: "No se pudo crear el post.",
                        error: true
                    });
                    return;
                }
                res.json(response);
            });
        });
    }
    deletePost(req, res) {
        const token = req.get("authorization");
        const { ID_POST } = req.body;
        jsonwebtoken_1.default.verify(token, "20040915", (err, decoded) => {
            deletePost(ID_POST, decoded.ID_USER)
                .then(response => {
                if (!response) {
                    res.json(response);
                    return;
                }
                const { data } = response;
                res.json(data);
            });
        });
    }
    getPosts(req, res) {
        getPosts()
            .then(response => {
            if (!response) {
                res.json(response);
                return;
            }
            console.log(response);
            res.json(response);
        })
            .catch(err => {
            res.json(err);
        });
    }
    getPostsByUser(req, res) {
        const { username } = req.params;
        getPostsByUser(username)
            .then(response => {
            res.json(response);
        });
    }
}
exports.default = controllers;
