import express from "express"
import products from "./data/Products.js"
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js"
import GetData from "./GetData.js"
import productRoute from "./Routes/ProductRoutes.js"
import { errorHandler, notFound } from "./Middleware/Errors.js"


dotenv.config()
connectDatabase()
const app = express()

app.use("/api/get", GetData)
app.use("/api/products", productRoute)

// Error Handler //
app.use(notFound)
app.use(errorHandler)


app.get("/", (req,res)=> {
    res.send("API is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on port ${PORT}`))