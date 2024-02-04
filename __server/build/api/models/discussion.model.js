"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../connectionDB"));
const Discussion = connectionDB_1.default.define("discussions", {
    ID_DISCUSSION: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true
    },
    ID_USER: sequelize_1.DataTypes.INTEGER,
    DISCUSSION_TOPIC: sequelize_1.DataTypes.TEXT,
    CAPTION: sequelize_1.DataTypes.TEXT
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
exports.default = Discussion;
