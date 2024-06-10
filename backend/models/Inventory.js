/**
 * @file Inventory.js
 * @description Inventory model for MongoDB
 * @github oaslananka
 */

const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);
