import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const server = {
  PORT: process.env.PORT || 5000,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  RESEND_API:process.env.RESEND_API || "your api key"
};

export const db = {
  MONGO_DB_URL: process.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/blinkit_clone",
};

export const security = {
  JWT_SECRET: process.env.JWT_SECRET || "defaultSecret",
};

export const responceStatus = {
  ZERO:0,
  ONE:1,
  TWO:2,
  TRUE:true,
  FALSE:false
}
export const models = {
  USER: "User",
  ADDRESS: "Address",
  PRODUCT: "Product",
  CATEGORY: "Category",
  SUBCATEGORY: "Subcategory",
  ORDER: "Order",
  CART: "Cart",
};
