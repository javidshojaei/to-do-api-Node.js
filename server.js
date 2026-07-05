const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Helloooooo Node.js");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});