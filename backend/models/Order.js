/**
 * @file Order.js
 * @description Order model for MongoDB
 * @github oaslananka
 */

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    items: [
        {
            itemName: String,
            quantity: Number
        }
    ],
    status: {
        type: String,
        default: 'Pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    shipDate: {
        type: Date
    }
});

module.exports = mongoose.model('Order', OrderSchema);
