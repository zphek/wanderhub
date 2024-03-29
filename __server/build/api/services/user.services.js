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
exports.services = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const crypto_1 = require("../utility/crypto");
const { comparePassword, encryptPassword } = new crypto_1.crypto;
class services {
    signIn(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findOne({
                where: {
                    USERNAME: username
                }
            });
        });
    }
    createUser(username, password, url_image, full_name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.create({
                ID_USER: null,
                USERNAME: username,
                USER_PASSWORD: yield encryptPassword(password),
                FULL_NAME: full_name,
                EMAIL: email,
                URL_IMAGE: url_image,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        });
    }
    getUser(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findByPk(user_id);
        });
    }
    getUserById(USERNAME) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findOne({
                where: {
                    USERNAME
                }
            });
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findAll();
        });
    }
}
exports.services = services;
