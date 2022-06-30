const dotenv = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize')

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });


const posts = require("./post.js")(sequelize, Sequelize);
const users = require("./user.js")(sequelize, Sequelize.DataTypes)
const comments = require("./comment.js")(sequelize, Sequelize)

users.hasMany(posts)
posts.belongsTo(users)

posts.hasMany(comments)
comments.belongsTo(posts)

users.hasMany(comments)
comments.belongsTo(users)

sequelize.sync({ alter:true });

module.exports = {users, posts, comments};