"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const connectionDB_js_1 = __importDefault(require("../connectionDB.js"));
const D_C = connectionDB_js_1.default.define("discussions_comments", {
    ID_DISCUSSION: DataTypes.INTEGER,
    ID_COMMENT: DataTypes.STRING
});
connectionDB_js_1.default.query('SET FOREIGN_KEY_CHECKS = 0')
    .then(function () {
    return connectionDB_js_1.default.sync({ force: true });
})
    .then(function () {
    return connectionDB_js_1.default.query('SET FOREIGN_KEY_CHECKS = 1');
})
    .then(function () {
    console.log('Database synchronised.');
}, function (err) {
    console.log(err);
});
exports.default = D_C;
