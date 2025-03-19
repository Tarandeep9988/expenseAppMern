const express = require("express");
const { addTransactionController, getAllTransactionController, deleteTransactionController, updateTransactionController } = require("../controllers/transactionController");

const router = express.Router();

router.post("/addTransaction", addTransactionController);
router.post("/getTransaction", getAllTransactionController);
router.post("/deleteTransaction/:id", deleteTransactionController);
router.post("/updateTransaction/:id", updateTransactionController);

module.exports = router;