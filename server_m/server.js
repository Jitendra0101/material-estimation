const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors()); 
const bcrypt=require("bcryptjs");


const jwt=require("jsonwebtoken");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";



//mongodb atlas url
const mongourl="mongodb+srv://soniya:soniya@cluster0.izoyg3z.mongodb.net/?retryWrites=true&w=majority"

//connect to the database
mongoose.connect(mongourl,{
  useNewUrlParser:true,
})
.then(()=>{
  console.log("connected to database");
})
.catch((e)=>console.log(e));

require("./userdetails");
const User=mongoose.model("UserInfo")

require("./contactus12");
const Conta=mongoose.model("Contact_us")







app.post("/loginuser", async (req, res) => {
  console.log("manas123")
  const { fname, password } = req.body;

  const user = await User.findOne({ fname });
  if (!user) {
    return res.send({ eroor: "User Not found" });
    
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({fname:user,fname}, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});











app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userfname = user.fname;
    User.findOne({ fname: userfname })
      .then((data) => {
        res.send({ status: "ok", data: data });
      }) 
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});











app.post("/register",async(req,res)=>
{
  
  const{fname,lname,password}=req.body;

  const encrpyptedpassword=await bcrypt.hash(password,10)
  try{
    const oldUser=await User.findOne({fname});
    if(oldUser){
        return res.send({status:"User Exists"});
    }
    if(password.length!==8){
      console.log("please enter 8 digit password");
      return res.send({status:"incorrect count"});
    }
    await User.create({
      fname,
      lname,
      password:encrpyptedpassword,
    });
    res.send({status:"ok"})
  }catch(error){
    res.send({status:"error"})
  }
});




app.post("/contus",async(req,res)=>{
  console.log("manas")
  const{fullname,email,descr}=req.body;
  console.log(fullname,email,descr)
  
  try{
  await Conta.create({
    fullname,
    email,
    descr,
  });
  res.send({status:"ok"})
}
  catch(error){
    res.send({status:"error"})
  }
});




app.post("/estimatecalculate",async(req,res)=>{
  const{userfname,area,cararea,compoundfeet,balcony}= req.body;

  try{ 
    await User.findOneAndUpdate({fname:userfname},
        {details:[{
          area,
          cararea,
          compoundfeet,
          balcony,
                }]}
    );
    res.send({status:"ok"})
  }catch(error){
    res.send({status:"error"})
  }
});





//select port for listening
app.listen(5000,()=>{
  console.log("server started");
})
