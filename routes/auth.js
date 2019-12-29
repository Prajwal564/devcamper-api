const express = require('express');

const { login, register, getMe } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/login', login);
router.post('/register', register);
router.get('/me', protect, getMe);

module.exports = router;
