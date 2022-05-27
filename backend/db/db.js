const {Sequelize} = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'mysql',
    host: process.env.DB_HOST,
    logging: false
});

const checkConnection =async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()

module.exports = sequelize