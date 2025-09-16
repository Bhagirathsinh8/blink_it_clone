import mongoose from "mongoose";
import {models}  from "../utils/constant.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: [true, "provide Email"],
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default: "",
    },
     role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    phone: {
      type: Number,
      default: null,
    },
    refresh_token: {
      type: String,
      default: "",
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login_date: {
      type: Date,
      default: "",
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
    address_details: [
      {
        type: mongoose.Schema.ObjectId,
        ref: models.ADDRESS,
      },
    ],
    shopping_cart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: models.CART,
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: models.ORDER,
      },
    ],
    forgot_password_otp: {
      type: String,
      default: null,
    },
    forgot_password_expire: {
      type: Date,
      default: "",
    },
   
  },
  { timestamps: true }
);

const USER = mongoose.model(models.USER,userSchema);

export default USER;