import { StatusCodes } from "http-status-codes";
import { loginService, registerService, verifyEmailService } from "./auth.service.js";

export const register = async(req,res,next) =>{
    try {
        const user = await registerService(req.body);
        if(!user){
            return res.status(400).json({
                status:0,
                success:false,
                message:"Failed To Create user",
                data:null
            });
        }

        return res.status(201).json({
            status:1,
            success:true,
            message:"User Created Successfully",
            data:user
        })
    } catch (error) {
        // console.log(error.message);
        next(error)
    }
}


export const login = async(req,res,next)=>{
    try {           
        const user = await loginService(req.body);

        if(!user){
           return res.status(StatusCodes.NOT_FOUND).json({
                status:0,
                success:false,
                message:"User Not Found!",
                data:null
            });
        }

        return res.status(StatusCodes.OK).json({
            status:1,
            success:true,
            message:"User Login SuccessFully",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

export const verifyEmail = async(req,res,next)=>{
    try {     
         
        const user = await verifyEmailService(req.body);

        return res.status(200).json({
            status:1,
            success:true,
            message:"verify Mail Successfully",
            data:user
        })
     
    } catch (error) {
        next(error);
    }
}