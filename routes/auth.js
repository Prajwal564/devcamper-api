const express = require('express');

const {
  login,
  register,
  getMe,
  forgotPassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/login', login);
router.post('/register', register);
router.post('/forgotpassword', forgotPassword);
router.get('/me', protect, getMe);

module.exports = router;
