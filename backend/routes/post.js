const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/post',   auth, postCtrl.getAllPosts);
router.post('/post',  auth, multer, postCtrl.createPost);
router.get('/post/:id',  auth, postCtrl.getOnePost);
router.put('/post/:id',  auth, multer, postCtrl.modifyPost);
router.delete('/post/:id',  auth, postCtrl.deletePost);
router.post('/post/:id/like', auth, postCtrl.likePost);
module.exports = router;