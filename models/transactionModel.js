const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    amount: {
        type: number,
        require: [true, 'Amount is required']
    },
    category: {
        type: String,
        require: [true, 'Category is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        require: [true, 'Description is required']
    },
    date: {
        type: String,
        require: [true, 'Date is required']
    }

}, {timestamps: true});


const transactionModel = new mongoose.model('transactions', transactionSchema);

module.exports = transactionModel;