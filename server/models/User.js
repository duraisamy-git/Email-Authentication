
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true,
    },
    verified:{
        type:Boolean,
        default:false,
    },
},
  {timestamps:true},
);

const user = mongoose.model("users", UserSchema);

module.exports = user;