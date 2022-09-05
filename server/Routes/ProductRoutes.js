import express from "express"
import asyncHandler from "express-async-handler"
import Product from "../models/ProductModel.js"

const productRoute = express.Router()

// get all Products //
productRoute.get("/", asyncHandler( async (req, res) => {
    const allProducts = await Product.find({})
    res.json(allProducts)
    }
))

// get a single Product //
productRoute.get("/:id", asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) { 
    res.json(product)
    }else{
        res.status(404)
        throw new Error("Product not Found")
    }
    
    }
))

export default productRoute