
const mongoose = require("mongoose");

//Creating Customer schema with mongoose validation instead of  the class
 var customerSchema = new mongoose.Schema(
  {
        fName:String,
        lName:String,
        phoneNum:String,
        eMail:String,
        Address:String,
       cartID:Number,
       lastOrderId:Number
    }
 );


// class Customer{
//     fName;
//     lName;
//     phoneNum;
//     eMail;
//     Address;
//     cartID;
//     lastOrderId;
//      constructor(lName,fName,phoneNum,eMail,Address,cartID,lastOrderId){
//          this.lName=lName;
//          this.fName=fName;
//          this.phoneNum=phoneNum;
//          this.eMail=eMail;
//          this.Address=Address;
//          this.cartID=cartID;
//          this.lastOrderId=lastOrderId;

//      }
// }

var Customer = mongoose.model("customer",customerSchema);

module.exports=Customer;