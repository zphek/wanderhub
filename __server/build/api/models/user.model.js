"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../connectionDB"));
const User = connectionDB_1.default.define("users", {
    ID_USER: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    FULL_NAME: sequelize_1.DataTypes.STRING,
    USERNAME: {
        unique: true,
        type: sequelize_1.DataTypes.STRING
    },
    USER_PASSWORD: sequelize_1.DataTypes.STRING,
    URL_IMAGE: sequelize_1.DataTypes.STRING,
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
});
// sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
// .then(function(){
//     return sequelize.sync({ force: true });
// })
// .then(function(){
//     return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
// })
// .then(function(){
//     console.log('Database synchronised.');
// }, function(err){
//     console.log(err);
// });
exports.default = User;
