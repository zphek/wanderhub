"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
const crypto_1 = require("../utility/crypto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { comparePassword } = new crypto_1.crypto;
const { createUser, getUser, getUserById, getUsers, signIn } = new user_services_1.services;
class controllers {
    signIn(req, res) {
        const { username, password } = req.body;
        signIn(username, password).then((resp) => __awaiter(this, void 0, void 0, function* () {
            console.log(resp);
            if (!resp) {
                res.json({
                    auth: false
                });
                return;
            }
            const { dataValues } = resp;
            const response = yield comparePassword(password, dataValues.USER_PASSWORD);
            if (response && dataValues != null) {
                const token = jsonwebtoken_1.default.sign(dataValues, "20040915", {
                    expiresIn: 3000
                });
                req.session.user = dataValues;
                res.json(Object.assign(Object.assign({}, dataValues), { auth: response, token: token }));
                return;
            }
            res.json({
                auth: response
            });
            console.log(yield comparePassword(password, dataValues.USER_PASSWORD));
        }));
    }
    isUserAuth(req, res) {
        res.json({
            auth: true
        });
    }
    createUser(req, res) {
        const { username, password, url_image, full_name, email } = req.body;
        createUser(username, password, url_image, full_name, email)
            .then(response => res.send(response));
        res.send("done!");
    }
    getUser(req, res) {
        const token = req.get("authorization");
        console.log(token);
        jsonwebtoken_1.default.verify(token, "20040915", (err, decoded) => {
            console.log(decoded);
            getUser(decoded.ID_USER)
                .then(response => {
                res.json(response);
            });
        });
    }
    getUserById(req, res) {
        const { username } = req.params;
        getUserById(username).then(response => {
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
