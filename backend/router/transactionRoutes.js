const express = require("express");
const { addTransactionController } = require("../controllers/transactionController");

const router = express.Router();

router.post("/addTransaction", addTransactionController);
// router.post("/getTransaction", );
// router.post("/deleteTransaction/:id", );
// router.post("/updateTransaction/", );

module.exports = router;