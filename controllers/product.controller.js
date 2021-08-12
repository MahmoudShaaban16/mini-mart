const express = require("express");
const ProductModel = require("../models/product.model");
const joi = require("joi");
const Joi = require("joi");
const productRouter = express.Router();
var products = [];

productRouter.get("/", async (req, res) => {
  var products=await ProductModel.Product.find({category:{$in:['rice','milks']}}).limit(200).sort({name:1,price:-1}).select('name description price category -_id');
  res.send(products);
})

productRouter.get("/:categorId/:name", (req, res) => {

})

productRouter.get("/:id", async (req, res) => {

  //ObjectId
  var productId = req.params.id;
  if(ProductModel.checkIdIsValid(productId))
  {
  var product = await ProductModel.Product.findById(productId);
  res.send(product);
  }
  else
  {
    res.status(400).send(`Invalid value for product id parameter ${productId}`)
  }

});

productRouter.post("/", async (req, res) => {

  var product=req.body;
  // var productSchema = joi.object({
  //   name: joi.string().required().min(5).max(20),
  //   image: joi.string().required(),
  //   description: joi.string(),
  //   productionDate: joi.date().required(),
  //   expiryDate: joi.date().required(),
  //   category: joi.string().required(),
  //   price:joi.number().required()

  // });

  // var product = req.body;
  // var validationResult = productSchema.validate(product);
  // console.log(validationResult);
  // 
  
    // I can constructor to fill model data
    var newProduct=new ProductModel.Product();
    newProduct.name=product.name;
    newProduct.description=product.description;
    newProduct.image=product.image;
    newProduct.productionDate=product.productionDate;
    newProduct.expiryDate=product.expiryDate;
    newProduct.category=product.category;
    newProduct.price=product.price;
    try{

    const addedProduct=await newProduct.save();

    res.send(addedProduct);
    }
    catch(err){
      res.status(400).send(err);
    }
  




});

productRouter.put("/:id", async(req, res) => {

  // update by finding the documents first
if(ProductModel.checkIdIsValid(req.params.id)){
  
  var result=await ProductModel.Product.findByIdAndUpdate(req.params.id,{$set:{
  
    price:req.body.price

  }},{new:false});
  console.log(result);
  res.send(result);
  // var productToBeUpdated=await ProductModel.Product.findById(req.params.id);
  // if(productToBeUpdated!=null){
  //   var product=req.body;
  //   productToBeUpdated.price=product.price;
  //   productToBeUpdated.image=product.image;
  //   var productUpdated=await productToBeUpdated.save();
  //   res.send(productUpdated);
  // }

}
else
{
  res.status(400).send("invalid product Id")
}
 
 



})

productRouter.delete("/:id", async (req, res) => { 

  //var result=await ProductModel.Product.deleteMany({price:{$lte:500}});
  var result=await ProductModel.Product.findByIdAndDelete(req.params.id);
  res.status(200).send(result);


});

module.exports = productRouter;