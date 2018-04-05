var express = require("express");
var bodyParser= require("body-parser");
var keys = require("./config/keys")
var stripe = require('stripe')(keys.stripeSecretKey);
 
var app = express();

var indexRoutes = require("./routes/index.js")


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));



//=======Routes=======
app.use(indexRoutes);



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("THE APP IS RUNNING")
})