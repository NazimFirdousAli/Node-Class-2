const http = require("http");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const fromRouter = require("./router/form");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(req.url)
    next();
})

app.use("/form", fromRouter);

app.use("/", (req, res, next) => {
    res.send("Welcome to websites")
})

app.listen(3001);