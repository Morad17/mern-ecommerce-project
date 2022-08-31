import express from "express"
import products from "./data/Products.js"
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js"


dotenv.config()
connectDatabase()
const app = express()

//Load Product //
app.get("/api/products", (req,res)=>{
    res.json(products)
})

// Get single product from server //
app.get("/api/products/:id", (req,res)=>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})

app.get("/", (req,res)=> {
    res.send("API is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on port ${PORT}`))