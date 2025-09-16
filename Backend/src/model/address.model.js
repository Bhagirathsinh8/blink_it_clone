import mongoose from "mongoose";
import {models}  from "../utils/constant";

const addressSchema = new mongoose.Schema(
  {
    address_line: {
      type: String,
      default:""  
    },
    city: {
      type: String,
      default:""  
    },
    state: {
      type: String,
      default:""  
    },
    pincode: {
      type: String,
    },
    country: {
      type: String,
    },
    mobile:{
        type:Number,
        default:null
    },
    status:{
      type:Boolean,
      default:true
    }

  },
  { timestamps: true }
);

const ADDRESS = mongoose.model(models.ADDRESS,addressSchema);

export default ADDRESS;