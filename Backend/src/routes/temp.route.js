import { Router } from "express";
import { AppError } from "../utils/errorHandler.js";
const router = Router();


router.get('/',(req,res)=>{
    res.send("Hello Temp Routes");
})


router.get("/test-error", (req, res, next) => {
  next(new AppError("This is a custom error", 400));
});

export default router;