const express = require("express");
const app = express();

const productRouter = require("./routes/productrouts.js");
const cartRouter = require("./routes/cartroutes.js");
const authRouter = require("./routes/authRouts.js");
const errorHandler = require("./middleware/errorMiddleware");

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.use(errorHandler);

module.exports = app;