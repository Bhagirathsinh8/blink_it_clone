import mongoose from "mongoose";
import {models}  from "../utils/constant";

const categorySchema = new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String,
        default:""
    },
},{
    timestamps:true
})

const CATEGORY = mongoose.model(models.CATEGORY,categorySchema);

export default CATEGORY;
