import express from "express"
import products from "./data/Products.js"
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js"
import GetUsers from "./GetUsers.js"


dotenv.config()
connectDatabase()
const app = express()

app.use("/api/get", GetUsers)

app.get("/", (req,res)=> {
    res.send("API is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on port ${PORT}`))