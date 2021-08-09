const express = require("express");
const Product = require("../models/product.model");
const joi = require("joi");
const Joi = require("joi");
const productRouter = express.Router();
var products = [new Product('lamar milk', "milk.png", "this is a milk", new Date(), new Date(), "Milks")];

productRouter.get("/", (req, res) => {
  res.send(products);
})

productRouter.get("/:categorId/:name", (req, res) => {

})

productRouter.get("/:id", (req, res) => {

});

productRouter.post("/", (req, res) => {

  var productSchema = joi.object({
    name: joi.string().required().min(5).max(20),
    image: joi.string().required(),
    description: joi.string(),
    productionDate: joi.date().required(),
    expiryDate: joi.date().required(),
    category: joi.string().required()


  });

  var product = req.body;
  var validationResult = productSchema.validate(product);
  console.log(validationResult);
  if (validationResult.error) {

    res.status(400).send(validationResult.error.details[0].message);
  }
  else {
    res.send(product);
  }




});

productRouter.put("/:id", (req, res) => {

})

productRouter.delete("/:id", (req, res) => {

});

module.exports = productRouter;