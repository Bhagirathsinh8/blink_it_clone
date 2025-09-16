import mongoose from "mongoose";
import {models}  from "../utils/constant";

const subCategorySchema = new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String,
        default:""
    },
    category:[
        {
            type:mongoose.Schema.ObjectId,
            ref:models.CATEGORY
        }
    ]
},{
    timestamps:true
})

const SUBCATEGORY = mongoose.model(models.SUBCATEGORY,subCategorySchema);

export default SUBCATEGORY;
