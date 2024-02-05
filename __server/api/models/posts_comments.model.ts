import { DataTypes } from "sequelize";
import sequelize from "../connectionDB";

const P_C = sequelize.define("posts_comments", {
    ID_POST: DataTypes.INTEGER,
    ID_COMMENT: DataTypes.INTEGER
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

export default P_C;