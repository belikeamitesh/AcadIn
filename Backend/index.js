const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Error connecting to database", err));

app.listen(process.env.PORT, () => {
    console.log(`Backend server started on port ${process.env.PORT}`);
});