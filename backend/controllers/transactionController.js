const Transaction = require("../models/TransactionModel");
const User = require("../models/UserModel")
const mongoose = require("mongoose");

const addTransactionController = async (req, res) => {
    try {
        const {
            title,
            amount,
            description,
            date,
            category,
            userId,
            transactionType,
        } = req.body;

        console.log(title, amount, description, date, category, userId, transactionType);
        
        if (
            !title ||
            !amount || 
            !description ||
            !date ||
            !category || 
            !transactionType
        ) {
            return res.status(400).json({
                success: false,
                message: "Please Fill all fields",
            })
        }
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            })
        }

        let newTransaction = await Transaction.create({
            title,
            amount,
            category,
            description,
            date,
            user: userId,
            transactionType,
        });

        user.transactions.push(newTransaction);

        user.save();

        return res.status(200).json({
            success: true,
            message: "Transaction Added Successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};


module.exports = { addTransactionController };