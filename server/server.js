const express = require("express");
const connectDB = require("./config/db");
const app = express();
const userRouter = require("./routes/user");
const cors = require("cors");


connectDB();

app.get("/", (req,res)=>{
    res.send("APi is Working");
});
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);




app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server is Running and Working ");
});