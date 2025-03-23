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

        user.transactions.push(newTransaction._id);

        await user.save();

        return res.status(201).json({
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

const getAllTransactionController = async (req, res) => {
    try {
        const { userId, type, frequency, startDate, endDate } = req.body;

        console.log(userId, type, frequency, startDate, endDate);

        const user = await User.findById(userId);
        
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }
        
        // Checking transaction type
        if (type !== "income" && type !== "expense" && type !== "all") {
            return res.status(400).json({
                success: false,
                message: "Invalid transaction type",
            })
        }

        // Create a query object with the user and type conditions
        const query = {
            user: userId,
        };

        if (type !== "all") {
            query.transactionType = type;
        }

        // Add date conditions based on 'frequency' and 'custom' range
        if (frequency !== 'custom') {
            // This part is still left
            return res.status(500).json({
                success: false,
                message: "frequency !== custom is not implemented yet",
            })
        }
        
        console.log(query);

        const transactions = await Transaction.find(query);

        console.log(transactions);

        return res.status(200).json({
            success: true,
            transactions,
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

const deleteTransactionController = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const userId = req.body.userId;

        console.log(transactionId, userId);

        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }
        
        const transactionElement = await Transaction.findByIdAndDelete(
            transactionId
        );

        if (!transactionElement) {
            return res.status(400).json({
                success: false,
                message: "transaction not found",
            });
        }

        const transactionArr = user.transactions.filter(
            (id) => id.toString() !== transactionId.toString()
        );

        user.transactions = transactionArr;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Transaction successfully deleted",
        });

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

const updateTransactionController = async (req, res) => {
    try {
        const transactionId = req.params.id;

        const { title, amount, description, date, category, transactionType } = req.body;

        const transactionElement = await Transaction.findById(transactionId);

        if (!transactionElement) {
            return res.status(400).json({
                success: false,
                message: "Transaction not found",
            });
        }
        if (title) {
            transactionElement.title = title;
        }
        if (description) {
            transactionElement.description = description;
        }
        if (amount) {
            transactionElement.amount = amount;
        }
        if (category) {
            transactionElement.category = category;
        }
        if (transactionType) {
            transactionElement.transactionType = transactionType;
        }
        if (date) {
            transactionElement.date = date;
        }        

        await transactionElement.save();

        return res.status(200).json({
            success: true,
            message: "Transaction Updated Successfully",
            transaction: transactionElement,
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports = { addTransactionController , getAllTransactionController, updateTransactionController, deleteTransactionController};