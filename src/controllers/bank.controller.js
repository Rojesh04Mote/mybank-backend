const Bank = require('../models/bank.model');

function readData(req, res) {
    Bank.find()
        .then((result) => res.json({ result }))
        .catch((error) => {
            res.status(400);
            console.log(error);
        });
}

async function addData(req, res) {
    const { total, aakash, rojesh } = req.body;

    const newData = Bank({
        total: total,
        left: total,
        aakash: {
            total: aakash.total,
            due: aakash.due,
            extra: aakash.extra,
        },
        rojesh: {
            total: rojesh.total,
            due: rojesh.due,
            extra: rojesh.extra,
        },
    });

    try {
        await newData.save();
        res.json({ success: true, message: 'Data Saved !' });
    } catch (error) {
        console.log(error);
    }
}

function updateData(req, res) {
    res.json({ message: 'updating data' });
}

function deleteData(req, res) {
    res.json({ message: 'deleting data' });
}

module.exports = {
    readData,
    addData,
    updateData,
    deleteData,
};
