const express = require("express");
const { addTransactionController, getAllTransactionController, deleteTransactionController, updateTransactionController } = require("../controllers/transactionController");

const router = express.Router();

router.post("/addTransaction", addTransactionController);
router.post("/getTransaction", getAllTransactionController);
router.delete("/deleteTransaction/:id", deleteTransactionController);
router.put("/updateTransaction/:id", updateTransactionController);

module.exports = router;