const {DataTypes} = require('sequelize')
const sequelize = require('backend/db/db.js')

const user = sequelize.define('user',{
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    }
})

module.exports = user