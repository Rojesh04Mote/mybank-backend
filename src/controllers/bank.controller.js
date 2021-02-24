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
    const { _id, ...rest } = req.body;
    Bank.findByIdAndUpdate(_id, {
        ...rest,
    })
        .then(() => res.json({ message: 'Data updated succesfully' }))
        .catch((error) => res.json({ error: 'some error occured' }));
}

function deleteData(req, res) {
    const { id } = req.params;

    Bank.findByIdAndDelete(id).then(() =>
        res.json({ message: 'Document deleted succesfully!' })
    );
}

module.exports = {
    readData,
    addData,
    updateData,
    deleteData,
};
