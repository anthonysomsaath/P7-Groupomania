const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/',    postCtrl.getAllPosts);
router.post('/post',   multer, postCtrl.createPost);
router.delete('/post/:id',  postCtrl.deletePost);

module.exports = router;