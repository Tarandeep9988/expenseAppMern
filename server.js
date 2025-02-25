const express = require("express");
const cors = require("cors");
const morgon = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");

// dotenv configuration
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(morgon('dev'));
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('Hello from Server')
})


// port 
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})