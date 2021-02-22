const router = require('express').Router();

const {
    readData,
    addData,
    updateData,
    deleteData,
} = require('../controllers/bank.controller');

router.get('/', readData);
router.post('/add', addData);
router.put('/', updateData);
router.delete('/', deleteData);

module.exports = router;
