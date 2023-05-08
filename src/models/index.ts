import { Sequelize } from "sequelize";
import { PetsFactory } from "./pets";

const dbName = 'petDB';
const username = 'root';
const password = 'password';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

PetsFactory(sequelize);

export const db = sequelize;