"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionDB_1 = __importDefault(require("../connectionDB"));
const Comment = connectionDB_1.default.define("comments", {
    ID_COMMENT: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true
    },
    DESCRIPTION_C: sequelize_1.DataTypes.STRING,
    ID_USER: sequelize_1.DataTypes.INTEGER,
    ID_DISCUSSION: sequelize_1.DataTypes.INTEGER,
    LIKES: sequelize_1.DataTypes.INTEGER,
    createdAT: sequelize_1.DataTypes.DATE,
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
exports.default = Comment;
