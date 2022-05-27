const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/post/:id/comments',   auth, commentCtrl.getAllComments);
router.post('/post/:id/comments',  auth, multer, commentCtrl.createComment);
router.delete('/post/:id/comments',  auth, commentCtrl.deleteComment);
router.post('/post/:id/comments/like', auth, commentCtrl.likeComment);
module.exports = router;