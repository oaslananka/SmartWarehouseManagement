/**
 * @file orderController.js
 * @description Controller functions for order operations
 * @github oaslananka
 */

const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { customerName, items } = req.body;

    try {
        const newOrder = new Order({
            customerName,
            items
        });

        await newOrder.save();
        res.status(201).json({ msg: 'Order created successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateOrder = async (req, res) => {
    const { id, status, shipDate } = req.body;

    try {
        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }

        order.status = status;
        order.shipDate = shipDate;

        await order.save();
        res.status(200).json({ msg: 'Order updated successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        await Order.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Order deleted successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
