const express = require("express");
const cors = require("cors");
const morgon = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connnectDb = require("./config/connectDb");

// dotenv configuration
dotenv.config();

// database call
connnectDb();

// rest object
const app = express();

// middlewares
app.use(morgon('dev'));
app.use(express.json());
app.use(cors());

// routes
// user routes
app.use('/api/v1/users', require('./routes/userRoute'));
// transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));


// port 
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})