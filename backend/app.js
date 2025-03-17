const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./DB/database");


dotenv.config();
const app = express();

const port = process.env.PORT;

connectDB();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
    
})