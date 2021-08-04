const express=require("express");
const Product=require("../models/product.model");

const productRouter=express.Router();
var products=[new Product('lamar milk',"milk.png","this is a milk",new Date(),new Date(),"Milks")];
productRouter.get("/",(req,res)=>{
  res.send(products);
})

productRouter.get("/:categorId/:name",(req,res)=>{

})

productRouter.get("/:id",(req,res)=>{
    
});

productRouter.post("/",(req,res)=>{

    console.log(req.body.name);
    res.send(req.body);
    
});

productRouter.put("/:id",(req,res)=>{
    
})

productRouter.delete("/:id",(req,res)=>{
    
});

module.exports=productRouter;