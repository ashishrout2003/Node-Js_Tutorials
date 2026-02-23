const express = require('express');
const authController = require("../Controllers/Auth.controller")
const router = express.Router();

router.post('/register', authController.registerUser)

module.exports = router;