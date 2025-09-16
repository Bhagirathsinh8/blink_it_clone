import mongoose, { model } from "mongoose";
import {models}  from "../utils/constant";

const orderSchema = new mongoose.Schema({
    userId :{
        type:mongoose.Schema.ObjectId,
        ref : models.USER
    },
    orderId :{
        type:String,
        require:true,
        unique:true
    },
    productId :{
        type:mongoose.Schema.ObjectId,
        ref : models.PRODUCT
    },
    product_details :{
        name:String,
        image:Array,
    },
    paymentId :{
        type:String,
        default:""
    },
    payment_status:{
        type:String,
        default:""
    },
    delivery_address:{
        type:mongoose.Schema.ObjectId,
        ref: models.ADDRESS
    },
    subTotalAmount :{
        type :Number,
        default:0
    },
    TotalAmount :{
        type :Number,
        default:0
    },
    invoice_receipt:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

const ORDER = mongoose.model(models.ORDER,orderSchema);

export default ORDER;