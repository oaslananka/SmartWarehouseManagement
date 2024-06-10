const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');

// @route POST /api/orders
// @desc Create an order
// @access Private
router.post('/', auth, orderController.createOrder);

// @route GET /api/orders
// @desc Get all orders
// @access Private
router.get('/', auth, orderController.getOrders);

// @route PUT /api/orders
// @desc Update an order
// @access Private
router.put('/', auth, orderController.updateOrder);

// @route DELETE /api/orders/:id
// @desc Delete an order
// @access Private
router.delete('/:id', auth, orderController.deleteOrder);

module.exports = router;
