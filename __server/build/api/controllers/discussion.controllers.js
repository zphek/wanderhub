"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discussion_services_1 = require("../services/discussion.services");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { createDiscussion, getDiscussion, getDiscussions } = new discussion_services_1.services;
class controllers {
    createDiscussion(req, res) {
        const { topic, description } = req.body;
        const token = req.get("authorization");
        // console.log(token);
        jsonwebtoken_1.default.verify(token, '20040915', (err, decoded) => {
            // console.log(decoded)
            createDiscussion(decoded.ID_USER, topic, description)
                .then(response => {
                res.json(response);
            });
        });
    }
    getDiscussion(req, res) {
        let { id } = req.params;
        getDiscussion(id)
            .then(response => {
            res.json(response);
        });
    }
    getDiscussions(req, res) {
        getDiscussions()
            .then(response => {
            res.json(response);
        });
    }
}
exports.default = controllers;
