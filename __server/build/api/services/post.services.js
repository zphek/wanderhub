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
const post_model_1 = __importDefault(require("../models/post.model"));
class services {
    createPost(CAPTION, ID_USER) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_model_1.default.create({
                ID_POST: null,
                URL_IMAGE: "",
                CAPTION,
                ID_USER,
                LIKES: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        });
    }
    deletePost(ID_POST, ID_USER) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_model_1.default.destroy({
                where: {
                    ID_POST,
                    ID_USER
                }
            });
        });
    }
    getPosts() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = post_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query("SELECT * FROM posts INNER JOIN users ON users.ID_USER = posts.ID_USER;"));
        });
    }
    getPostsByUser(USERNAME) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = post_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT * FROM posts INNER JOIN users ON users.ID_USER = posts.ID_USER WHERE users.USERNAME = '${USERNAME}';`));
        });
    }
}
exports.default = services;
