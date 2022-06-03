const express = require('express');
const path = require('path');
const helmet = require("helmet");
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/api/users', userRoutes);
app.use('/api/auth/posts', postRoutes);
app.use('/api/auth/comments', commentRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(helmet());

module.exports = app;