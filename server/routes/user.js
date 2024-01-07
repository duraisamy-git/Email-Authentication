const router= require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verify");
const nodemailer = require("nodemailer");
const secretkey = "abcdefg";


const email = "duraisamy22122000@gmail.com";
const pwd = "pern mgpz bkhk gbms";



//signup
router.post("/signup", async (req,res)=>{

    try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        contactNo: req.body.contactNo,
        password,
    });
    const data =  await user.save();
    const token = jwt.sign({ id:data._id}, "secretkey");
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:email,
            pass:pwd,
        },
    });

    let info = await transporter.sendMail({
        from:"Durai Tech <duraisamy22122000@gmail.com>",
        to: req.body.email,
        subject:"Verify your Email- Durai Tech",
        html:`
        <div>
        <strong>Mr.${req.body.name}</strong>, We welcome to our platform.
        <a style="background-color:green; color:white" href="http://localhost:5173/user/verify/${token}"> Verify Email </a>
        <p>Hope you will have a nice experience</p>
        <div>
        <p>Thanks and Regards</p>
        <P>From Durai Tech</P>
        </div>
        </div>`
    });
    console.log(info);

    res.json({msg: "Signup Successfully & Check your email"});

     } catch (error) {
        res.json({msg: error.message});
    }

});

//login
router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        if(user){
            const result = await bcrypt.compare(req.body.password, user.password);
            if(result){
              const token = jwt.sign({id: user._id}, "secretkey");
              return res.json({msg:"Login successfully"});
            }else{
                return res.json({msg:"Wrong password"});
            }
        }else{
            return res.json({msg: "No user found"});
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get("/data", verifyToken, async(req,res)=>{
    try {
        const userId = req.userId;
        const user = await User.findById(userId).select("-password");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get("/verify/:token", async(req,res)=>{
    try {
        const token = req.params.token;
        jwt.verify(token,"secretkey", async (err, decoded)=>{
            if(err){
                return res.json({msg: "Invalid Url"});
            }else{
                const user = await User.findByIdAndUpdate(decoded.id,{
                    verified:true,
                });
              return res.json({msg: "Account Verified"})
            }
        })
    } catch (error) {
        res.json({msg:error.message}); 
    }
})



module.exports = router;