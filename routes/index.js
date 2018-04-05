var express = require("express");
 var router = express.Router()
 var keys = require("../config/keys.js")
var stripe = require('stripe')(keys.stripeSecretKey); 
 
 router.get("/", function(req, res){
     res.render("index", {stripePublishableKey: keys.stripePublishableKey})
 })
 
router.post("/charge", function(req, res){
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(function(customer){ 
  stripe.charges.create({
    amount: 2500,
    description: 'Web Development Ebook',
    currency: 'usd',
    customer: customer.id
  })
  })
  .then(function(charge){ 
      
          res.render('success');
     
      
  }).catch(function(err){
      console.log(err);
  })


})
 
 
 
 module.exports = router;