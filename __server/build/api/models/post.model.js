"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../connectionDB"));
const Post = connectionDB_1.default.define("posts", {
    ID_POST: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true
    },
    URL_IMAGE: {
        type: sequelize_1.DataTypes.STRING
    },
    CAPTION: sequelize_1.DataTypes.STRING,
    ID_USER: sequelize_1.DataTypes.STRING
});
connectionDB_1.default.query('SET FOREIGN_KEY_CHECKS = 0')
    .then(function () {
    return connectionDB_1.default.sync({ force: true });
})
    .then(function () {
    return connectionDB_1.default.query('SET FOREIGN_KEY_CHECKS = 1');
})
    .then(function () {
    console.log('Database synchronised.');
}, function (err) {
    console.log(err);
});
exports.default = Post;
