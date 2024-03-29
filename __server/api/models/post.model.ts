import { DataTypes } from "sequelize";
import sequelize from "../connectionDB";

const Post = sequelize.define("posts", {
    ID_POST: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    URL_IMAGE: {
        type: DataTypes.STRING
    },
    CAPTION: DataTypes.STRING,
    ID_USER: DataTypes.STRING,
    LIKES: DataTypes.NUMBER,
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

export default Post;