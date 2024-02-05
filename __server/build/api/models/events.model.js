"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../connectionDB"));
const events = connectionDB_1.default.define("userEvents", {
    ID_POST: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true
    },
    URL_IMAGE: {
        type: sequelize_1.DataTypes.STRING
    },
    CAPTION: sequelize_1.DataTypes.STRING,
    ID_USER: sequelize_1.DataTypes.STRING,
    LIKES: sequelize_1.DataTypes.NUMBER,
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
});
exports.default = events;
