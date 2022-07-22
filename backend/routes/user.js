const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users/:id',  multer, userCtrl.getOneUser);
router.get('/users', userCtrl.getAllUsers);
router.put('/users/:id', multer, userCtrl.updateUser);
router.delete('/users/:id',  multer, userCtrl.deleteUser);

module.exports = router;