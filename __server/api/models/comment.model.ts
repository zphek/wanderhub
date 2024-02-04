import { DataTypes } from "sequelize";
import sequelize from "../connectionDB";

const Comment = sequelize.define("comments", {
    ID_COMMENT: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },  
    DESCRIPTION_C: DataTypes.STRING,
    ID_USER: DataTypes.STRING,
    LIKES: DataTypes.INTEGER
});

sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
    return sequelize.sync({ force: true });
})
.then(function(){
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
})
.then(function(){
    console.log('Database synchronised.');
}, function(err){
    console.log(err);
});

module.exports = Comment;