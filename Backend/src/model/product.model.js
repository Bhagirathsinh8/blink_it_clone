import mongoose from "mongoose";
import {models}  from "../utils/constant";

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:Array,
        default:[]
    },
    category: [
        {
            type: mongoose.Schema.ObjectId,
            ref:models.CATEGORY
        }
    ],
    subCategory:[
        {
            type: mongoose.Schema.ObjectId,
            ref:models.SUBCATEGORY
        }
    ],
    unit:{
        type:String,
        default:null
    },
    stock:{
        type:Number,
        default:null
    },
    price:{
        type:Number,
        default:null
    },
    dicount:{
        type:Number,
        default:null
    },
    description:{
        type:String,
        default:""
    },
    more_details:{
        type:Object,
        default: {}
    },
    public:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

const PRODUCT = mongoose.model(models.PRODUCT,productSchema);

export default PRODUCT;
