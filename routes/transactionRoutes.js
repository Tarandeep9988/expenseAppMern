const express = require('express');
const {addTransaction, getAllTransactions} = require('../controllers/transactionController');
// router object
const router = express.Router();

// routes
// add transaction
router.post('/add-transaction', addTransaction);

// get transaction
router.get('/get-transaction', getAllTransactions);

module.exports = router;