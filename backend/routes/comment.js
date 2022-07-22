const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/:id/comments',   auth, commentCtrl.getAllComments);
router.post('/:id/comments',  auth, multer, commentCtrl.createComment);
router.delete('/:id/comments/:id',  auth, commentCtrl.deleteComment);
module.exports = router