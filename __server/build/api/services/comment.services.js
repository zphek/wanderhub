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
const comment_model_1 = __importDefault(require("../models/comment.model"));
class services {
    createComment(description, ID_USER, ID_DISCUSSION) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_model_1.default.create({
                ID_COMMENTS: null,
                DESCRIPTION_C: description,
                ID_USER,
                ID_DISCUSSION,
                LIKES: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        });
    }
    getComment(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = comment_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT comments.DESCRIPTION_C, comments.LIKES, comments.createdAt, comments.updatedAt, users.USERNAME, users.FULL_NAME, users.URL_IMAGE FROM comments INNER JOIN users ON comments.ID_USER = users.ID_USER INNER JOIN discussions ON comments.ID_DISCUSSION = discussions.ID_DISCUSSION WHERE comments.ID_DISCUSSION = ${id}`));
        });
    }
}
exports.default = services;
