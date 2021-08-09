// class Product{
//     name;
//     imageUrl;
//     description;
//     expiryDate;
//     productionDate;
//     category;
//      constructor(name,imageUrl,description,expiryDate,productionDate,category){
//          this.category=category;
//          this.name=name;
//          this.description=description;
//          this.expiryDate=expiryDate;
//          this.productionDate=productionDate;
//          this.imageUrl=imageUrl;
//      }
// }

const mongoose=require("mongoose");
var productSchema=new mongoose.Schema({
    name:String,
    description:String,
    image:[String],
    ProductionDate:Date,
    ExpiryDate:Date,
    Category:String
});


var Product=mongoose.model("product",productSchema);

module.exports=Product;



module.exports=Product;