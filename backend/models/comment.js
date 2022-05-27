const {DataTypes} = require('sequelize')
const sequelize = require('backend/db/db.js')

const comment = sequelize.define('comment',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement :true
      }, 
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
})

module.exports = comment