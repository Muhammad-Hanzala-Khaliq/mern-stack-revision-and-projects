import { User } from "../models/userSchema.js";

export const getAllUsers = async(req,res)=>{

const users = await User.find({});

  res.json({
    sucess:true,
    users
  })
}

export const createUser = async(req,res)=>{
  const {name,email,password} = req.body

 await User.create({
  name,email,password
});

  res.json({
    sucess:true,
    message:"Register successfully"
  })
}

export const getSingleUser = async(req,res)=>{
  const {id} = req.params;
  const user = await User.findById(id);

  res.json({
    sucess:true,
    user
  })
}