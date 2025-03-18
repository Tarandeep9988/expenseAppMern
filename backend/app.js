const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./DB/database");
const morgan = require("morgan");


dotenv.config();
const app = express();

const port = process.env.PORT;

connectDB();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));

//Router
app.use("/api/auth", require("./router/userRoutes"));
app.use("/api/v1", require("./router/transactionRoutes"))

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
    
})