import { DataTypes } from "sequelize";
import sequelize from "../connectionDB";

const events = sequelize.define("userEvents", {
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

export default events;