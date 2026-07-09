const express = require("express");
const app = express();

const productRouter = require("./routes/productrouts.js");
const cartRouter = require("./routes/cartroutes.js");
const authRouter = require("./routes/authRouts.js");

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

module.exports = app;