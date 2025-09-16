import User from "../../model/user.model.js";
import bcrypt from "bcryptjs";
import { AppError } from "../../utils/errorHandler.js";
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { security, server } from "../../utils/constant.js";
import { sendEmail } from "../../config/sendEmail.js";
import verifyEmailTemplate from "../../utils/verifyEmailTemplate.js";

//Register
export const registerService = async (data) =>{
  const { name, email, phone, role, password } = data;
  
   const userExists = await User.findOne({ email });
  if(userExists){
    if(userExists.email === email){
      throw new AppError("Email Already Exits",StatusCodes.CONFLICT);
    }
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);


  const newUser = new User({
    name, email, phone, role, password:hashedPassword
  });
  const user = await newUser.save();

  const verifyEmailURL = `${server.FRONTEND_URL}/verify-email?code=${user._id}`
  

    await sendEmail({
    sendTo:"bhagirathnakum8@gmail.com",  //after word change to user.email to send email to user
    subject:"Welcome to B-Mart",
    html: verifyEmailTemplate({ name, url: verifyEmailURL}),
  })

  return user;
}

//Login 
export const loginService = async (data) =>{
  const {email,password} = data;

  const user = await User.findOne({email});
  if(!user){
    throw new AppError("No User Found",StatusCodes.NOT_FOUND);
  }

   if(user.status !== "active"){
    throw new AppError("Contact To Admin",StatusCodes.BAD_REQUEST)
  }

  const isMatch = await bcrypt.compare(password,user.password);
 
  if(!isMatch){
    throw new AppError("Invalid Credential",StatusCodes.UNAUTHORIZED)
  }

 
    const token = jwt.sign(
    { id: user._id},
    security.JWT_SECRET,
    { expiresIn: "30d"}
  );

  return {token,user}
}

//verify email
export const verifyEmailService = async(data)=>{
  const {code} = data
  const checkUser = await User.findById(code);
  if(!checkUser){
    throw new AppError("Invalid Verify Link",StatusCodes.UNPROCESSABLE_ENTITY);
  }

  const updateUser = await User.findByIdAndUpdate(code,{
    verify_email:true
  });
  return updateUser;
}