import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    comment:{
        type:String,
        require: true,

    },
    rating:{
        type:Number,
        require: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    }
})

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    image:{
        type:String,
        require: true,
    },
    description:{
        type:String,
        require: true,
    },
    price:{
        type:Number,
        require: true,
    },
    countInStock:{
        type:Number,
        require: true,
        default: 0,
    },
    rating:{
        type:String,
        require: true,
        default: 0,
        limit: 5
    },
    numReviews:{
        type:Number,
        require: true,
        default: 0,
    },
    reviews: [reviewSchema],
})

const Product = mongoose.model("Product", productSchema)

export default Product