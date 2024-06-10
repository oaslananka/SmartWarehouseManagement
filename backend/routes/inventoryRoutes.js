const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const auth = require('../middleware/auth');

// @route POST /api/inventory
// @desc Add an item to inventory
// @access Private
router.post('/', auth, inventoryController.addItem);

// @route GET /api/inventory
// @desc Get all items from inventory
// @access Private
router.get('/', auth, inventoryController.getItems);

// @route PUT /api/inventory
// @desc Update an item in inventory
// @access Private
router.put('/', auth, inventoryController.updateItem);

// @route DELETE /api/inventory/:id
// @desc Delete an item from inventory
// @access Private
router.delete('/:id', auth, inventoryController.deleteItem);

module.exports = router;
