import { Router } from "express";
import { login, register, verifyEmail } from "../module/auth/auth.controller.js";
const router = Router();


router.post('/register',register)
router.post('/login',login)

router.post('/verify-email',verifyEmail)



export default router;