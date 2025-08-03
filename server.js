// import express from "express";
// import path from 'path'
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt"

// mongoose.connect("mongodb://localhost:27017/backend").then(()=> console.log('Database Connected')).catch((e)=> console.log(e));

// const userSchema = new mongoose.Schema({
//   name:String,
//   email:String,
//   password:String
// })

// const User = mongoose.model("User",userSchema)

// const app = express();
// const users = [];
// // using middleware
// app.use(express.static(path.join(path.resolve(), 'public')))
// app.use(express.urlencoded({extended:true}))
// app.use(cookieParser())

// // setting view engine
// app.set("view engine","ejs")

// const isAuthenticated = async(req,res,next) => {
//   const {token} = req.cookies;
//    if(token){
//    const decoded = jwt.verify(token,"hiiamhanzalakhaliq");
//    req.user = await User.findById(decoded._id)
//     next();
//   }else{
//   res.redirect("/login")

//   }
// }

// app.get('/',isAuthenticated,(req,res)=>{
// res.render("logout",{name:req.user.name})

// });
//  app.get('/register',(req,res)=>{
//     res.render("register")
// });
// app.get('/login',(req,res)=>{
//   res.render("login")
// });

// app.post('/login',async(req,res)=>{
//   const {email,password} = req.body;
//   const user = await User.findOne({email});
//   if(!user) return res.redirect("/register");
//   const isMatch = await bcrypt.compare(password,user.password)
//   if(!isMatch) return res.render("login",{message:"Incorrect Password"});

//   const token = jwt.sign({_id:user._id},"hiiamhanzalakhaliq");
//    res.cookie("token",token,{
//     httpOnly:true,
//     expires:new Date(Date.now()+60*1000)
//    });
//    res.redirect("/")
// })

// app.post('/register',async(req,res)=>{
//   const {name,email,password} = req.body;
//     const userExist = await User.findOne({email});
//    if(userExist){
//     return res.redirect("/login")
//    }
//    const hashedPassword = await bcrypt.hash(password,10);

//   const user = await User.create({
//     name,
//     email,
//     password:hashedPassword
//    });

//    const token = jwt.sign({_id:user._id},"hiiamhanzalakhaliq");
//    res.cookie("token",token,{
//     httpOnly:true,
//     expires:new Date(Date.now()+60*1000)
//    });
//    res.redirect("/login")
// })

// app.get('/logout',(req,res)=>{
//   res.cookie("token",null,{
//     httpOnly:true,
//     expires:new Date(Date.now())
//   });
//   res.redirect('/')
// })

// app.listen(4000,()=>{
//   console.log("server is running")
// })

// app.get('/add',async(req,res)=>{
//    await Message.create({name:'Abhi',email:"ali@gmail.com"});
//     res.send("Nice")
// })
// app.post('/',(req,res)=>{
//   // console.log(req.body)
//   users.push();
//   res.render('success')

// })
