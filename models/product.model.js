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
    name:{type:String,required:true,trim:true,uppercase:true,
        validate:{
            isAsync:true,
            validator: function(n,callback){
            console.log('name',n);
             Product.findOne({name:n}).then(p=>{

                console.log("product from validation",p);
                if(p)
                {
            
                callback(false);
                }
                else  callback(true);

             });
            
            },
            message:"name should be unique"
        }
       
    
    },
    description:String,
    image:[String],
    productionDate:Date,
    expiryDate:Date,
    price:{type:Number,min:200,max:10000},
    category:{type:new mongoose.Schema({
        name:String
    }),enum:['milks']}
});


var Product=mongoose.model("product",productSchema);

function checkIdIsValid(id){
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports={Product,checkIdIsValid};



