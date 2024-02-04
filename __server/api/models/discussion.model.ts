import { DataTypes } from "sequelize";
import sequelize from "../connectionDB";

const Discussion = sequelize.define("discussions", {
    ID_DISCUSSION: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    ID_USER: DataTypes.INTEGER,
    DISCUSSION_TOPIC: DataTypes.TEXT,
    CAPTION: DataTypes.TEXT
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

export default Discussion;