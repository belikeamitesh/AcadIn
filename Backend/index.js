const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/Users");

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Error connecting to database", err));

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Backend server started on port ${process.env.PORT}`);
});