const mongoose = require('mongoose');

const bankSchema = mongoose.Schema({
    total: {
        type: Number,
        default: 0,
    },
    left: {
        type: Number,
        default: 0,
    },
    aakash: {
        type: {
            deposit: {
                type: Number,
                default: 0,
            },
            due: {
                type: Number,
                default: 0,
            },
            extra: {
                type: Number,
                default: 0,
            },
        },
    },
    rojesh: {
        type: {
            deposit: {
                type: Number,
                default: 0,
            },
            due: {
                type: Number,
                default: 0,
            },
            extra: {
                type: Number,
                default: 0,
            },
        },
    },
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
