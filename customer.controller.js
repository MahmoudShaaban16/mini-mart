
const express=require("express");
const mongoose = require("mongoose");

const Customer=require("../models/customer.model");

//list of customers created within the code
var customers=[new Customer("Hossam","Ahmed","+020101010101","hossam_ahmed@email.com","somewhere",123415 ,125874)];

// routes of the customer feature

const customerRouter=express.Router();

//get


//get all customers
customerRouter.get("/",(req,res)=>{
  res.send(customers);
})

//post

customerRouter.post("/",(req,res)=>{

    console.log(req.body.name);
    res.send(req.body);
    
});

//put

//delete



module.exports=customerRouter;