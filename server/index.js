const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/",(req,res) => {
    res.send("Running");
});

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log(`server running on port - ${port}`);
})