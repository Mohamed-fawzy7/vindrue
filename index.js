const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require('./routes/user');
const procutsRoutes = require('./routes/products');

const app = express();

const dbLink = `mongodb+srv://Fawzy:${process.env.MONGO_ATLAS_PASS}@myblog-risj0.mongodb.net/cosmeticsshop?retryWrites=true&w=majority`;
mongoose.connect(dbLink, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("conneceted to db");
}).catch(() => {
    console.log("failed to connect to db");
})


app.use("", (req, res, next) => {
    console.log(req.path);
    console.log(`route: ${req.url}, method: ${req.method}`);
    next();
})

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/products', procutsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);