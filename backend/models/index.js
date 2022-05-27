const dataB = require ("../db/db");
require('dotenv').config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'mysql',
    host: process.env.DB_HOST,
    logging: false
});

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./post.js")(sequelize, Sequelize);
db.users = require("./user.js")(sequelize, Sequelize)
db.comments = require("./comment.js")(sequelize, Sequelize)

db.users.hasMany(db.posts)
db.posts.belongsTo(db.users)

db.posts.hasMany(db.comments)
db.comments.belongsTo(db.posts)

db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

db.sequelize.sync({ alter:true });

module.exports = db;