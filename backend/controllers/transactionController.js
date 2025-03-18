const Transaction = require("../models/TransactionModel");
const User = require("../models/UserModel");

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
            return res.status(408).json({
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
            title: title,
            amount: amount,
            category: category,
            description: description,
            date: date,
            user: userId,
            transactionType: transactionType,
        });

        user.transactions.push(newTransaction);

        user.save();

        return res.status(200).json({
            success: true,
            message: "Transaction Added Successfully",
        });
    }
    catch (err) {
        return res.status(401).json({
            success: false,
            message: err.message,
        });
    }
};

const getAllTransactionController = async(req, res) => {
    try {
        const { userId, type, frequency, startDate, endDate } = req.body;
        console.log(userId, type, frequency, startDate, endDate);

        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }

        // Create a query object with the user and type conditions

        const query = {
            user: userId,
        };
        
        
    }
}