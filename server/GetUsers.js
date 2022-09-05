import express from "express";
import User from "./Models/UserModel.js"
import users from "./data/Users.js";

const GetUsers = express.Router()

GetUsers.post("/user", async (req, res) => {
    await User.remove({})
    const importUsers = await User.insertMany(users)
    res.send({ importUsers })
})

export default GetUsers