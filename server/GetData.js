import express from "express";
import User from "./Models/UserModel.js"
import users from "./data/Users.js";
import Product from "./models/ProductModel.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler"

const GetData = express.Router()

GetData.post("/user",  asyncHandler(async (req, res) => {
    await User.remove({})
    const importUsers = await User.insertMany(users)
    res.send({ importUsers })
   })
   )

GetData.post("/products", asyncHandler( async (req, res) => {
    await Product.remove({})
    const importProducts = await Product.insertMany(products)
    res.send({ importProducts })
})
)

export default GetData