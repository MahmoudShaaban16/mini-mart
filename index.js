const express=require("express");
const app=express();
const config=require("config");
const morgan=require("morgan");

var indexDebugger=require("debug")("app");
var dbDebugger=require("debug")("app:db");

const productRouter=require("./controllers/product.controller");
// use json() middelware
if(app.get("env")!="production")
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("static-files"));
app.use(express.urlencoded());
// register routes
app.use("/api/products",productRouter);
// read the port number from the configuration file..
indexDebugger(app.get("env"));

//console.log("ENV Variable Database user name:",process.env.Mini_mart_db_usr);
//console.log("ENV Variable Database user name:",config.get('userName'))
//console.log(process.env.NODE_ENV);

// openining connection with the mongo db

dbDebugger("connecting to the database");
var portNumber= config.get("portNumber") ||1122;
app.listen(portNumber,()=>{
    indexDebugger(`Application is running on port ${portNumber}`);
})