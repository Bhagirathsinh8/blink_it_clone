import mongoose from "mongoose";
import {models}  from "../utils/constant";

const cartSchema = new mongoose.Schema({
    productId :{
        type:mongoose.Schema.ObjectId,
        ref: models.PRODUCTPRODUCT
    },
    quantity :{
        type:Number,
        default:1
    },
     userId :{
        type:mongoose.Schema.ObjectId,
        ref: models.USER
    },
},{
    timestamps:true
});

const CARTPRODUCT = mongoose.model(models.CART,cartSchema);

export default CARTPRODUCT;