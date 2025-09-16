import { Router } from "express";

const router = Router();

import tempRoutes from "./temp.route.js";
import authRoutes from "./auth.route.js";


router.use('/temp', tempRoutes);
router.use('/auth', authRoutes);


export default router;