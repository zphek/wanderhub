import {Sequelize} from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const password:string = process.env.PASSWORD || '1234';

const sequelize = new Sequelize('wanderhub', 'root', password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida correctamente.');
    })
    .catch((err:Error) => {
        console.error('Error al conectar a la base de datos:', err);
    });

export default sequelize;
