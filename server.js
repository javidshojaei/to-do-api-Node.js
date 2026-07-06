const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoose = require('mongoose')


dotenv.config();



connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});