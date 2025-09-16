import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from 'helmet';
dotenv.config({quiet: true})

import ConnectDB from "./src/config/db.config.js"
import allRoutes from "./src/routes/index.js"
import {server} from "./src/utils/constant.js";
import { globalErrorHandler } from "./src/utils/errorHandler.js";


const app = express();
const PORT = server.PORT;

//Middleware
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: server.FRONTEND_URL
}))
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({
    crossOriginResourcePolicy: false
}));



//-----------------  Connect to MongoDB Server -----------------
ConnectDB();


// ----------------- Routes -----------------
app.use('/api', allRoutes);

// ----------------- Global error handler -----------------
app.use(globalErrorHandler);

// ----------------- Health Check -----------------
app.get('/', (req, res) => {
    res.send('Blink it Clone server is running');
    });

// ----------------- Server -----------------
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});