/**
 * @file userRoutes.js
 * @description Routes for user operations
 * @github oaslananka
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// @route POST /api/users/register
// @desc Register a user
// @access Public
router.post('/register', userController.registerUser);

// @route POST /api/users/login
// @desc Login a user
// @access Public
router.post('/login', userController.loginUser);

module.exports = router;
