// routes/chat.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.abrirChat);

module.exports = router;
