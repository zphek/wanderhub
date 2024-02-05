const { DataTypes } = require("sequelize");
import sequelize from "../connectionDB.js";

const D_C = sequelize.define("discussions_comments", {
    ID_DISCUSSION: DataTypes.INTEGER,
    ID_COMMENT: DataTypes.STRING
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

export default D_C;