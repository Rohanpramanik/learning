const mongoose = require("mongoose");

//it will create database in mongoDB with the name practice
mongoose.connect("mongodb://127.0.0.1:27017/practice");


// it tells about document data how it will be.
const userschema = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
})

//it will create collection with the name user
//and exporting it as well in a same line
module.exports = mongoose.model("user", userschema);
//syntax : mangoose.model("collectionName", schemaName)
