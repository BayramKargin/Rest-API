import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/user.js"

//const usersRoutes = require("./routes/user.js")
//const bodyParser = require("body-parser");
//const express = require("express");
const app = express();
app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("welcome to the Users API!"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesnt exist"));


//app.get("/api/course", (req, res) =>{
  //  res.send("Hello World????!!!");
//})

const port = 5000;

app.listen(port, () => console.log('Server running on port: http://localhost:${port}'));


