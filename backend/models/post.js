const {DataTypes} = require('sequelize')
const sequelize = require('backend/db/db.js')

const post = sequelize.define('post',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement :true
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
})

module.exports = post