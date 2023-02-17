const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./app/config/database.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
const app = express();

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connection Success....................")
}).catch(error =>{
    console.log("Could Not Connect..........." ,error)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to crud operation nodejs and mongodb ");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
