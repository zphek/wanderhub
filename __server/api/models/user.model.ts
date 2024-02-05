import {DataTypes} from "sequelize";
import sequelize from "../connectionDB";

const User = sequelize.define("users", {
    ID_USER: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    EMAIL: {
        type: DataTypes.STRING,
        unique: true
    },
    FULL_NAME:DataTypes.STRING,
    USERNAME: {
        unique: true,
        type: DataTypes.STRING
    },
    USER_PASSWORD: DataTypes.STRING,
    URL_IMAGE: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
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

export default User;