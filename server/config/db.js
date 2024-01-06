const mongoose = require("mongoose");

const url = "mongodb+srv://duraiweb:Durai75@duraisamy.ajazewf.mongodb.net/user-info?retryWrites=true&w=majority";

const connectDB = async()=>{
    const con = await mongoose.connect(url);
    console.log(`MongoDB is connected:${con.connection.host}`);
}

module.exports = connectDB;
