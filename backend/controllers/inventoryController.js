/**
 * @file inventoryController.js
 * @description Controller functions for inventory operations
 * @github oaslananka
 */

const Inventory = require('../models/Inventory');

exports.addItem = async (req, res) => {
    const { itemName, quantity, location } = req.body;

    try {
        const newItem = new Inventory({
            itemName,
            quantity,
            location
        });

        await newItem.save();
        res.status(201).json({ msg: 'Item added successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Inventory.find();
        res.status(200).json(items);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateItem = async (req, res) => {
    const { id, quantity, location } = req.body;

    try {
        const item = await Inventory.findById(id);

        if (!item) {
            return res.status(404).json({ msg: 'Item not found' });
        }

        item.quantity = quantity;
        item.location = location;

        await item.save();
        res.status(200).json({ msg: 'Item updated successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        await Inventory.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Item deleted successfully' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
