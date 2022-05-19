const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users/profile', auth, multer, userCtrl.getProfile);
router.put('/users/profile', auth, multer, userCtrl.updateProfile);
router.delete('/users/profile', auth, multer, userCtrl.deleteProfile);

module.exports = router;