class Product{
    name;
    imageUrl;
    description;
    expiryDate;
    productionDate;
    category;
     constructor(name,imageUrl,description,expiryDate,productionDate,category){
         this.category=category;
         this.name=name;
         this.description=description;
         this.expiryDate=expiryDate;
         this.productionDate=productionDate;
         this.imageUrl=imageUrl;
     }
}

module.exports=Product;