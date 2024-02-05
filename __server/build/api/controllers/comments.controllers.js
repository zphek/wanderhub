"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_services_1 = __importDefault(require("../services/comment.services"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { createComment, getComment } = new comment_services_1.default;
class controllers {
    createComment(req, res) {
        let { description, ID_DISCUSSION } = req.body;
        const token = req.get("authorization");
        jsonwebtoken_1.default.verify(token, "20040915", (err, decoded) => {
            createComment(description, decoded.ID_USER, ID_DISCUSSION)
                .then(response => {
                res.json(response);
            });
        });
    }
    getComments(req, res) {
        let { id } = req.params;
        getComment(id)
            .then(response => {
            res.json(response);
        });
    }
}
exports.default = controllers;
