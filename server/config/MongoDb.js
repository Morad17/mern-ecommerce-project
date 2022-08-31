import mongoose from "mongoose";

const connectDatabase = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log(`Error: ${error.mesage}`);
        process.exit(1)
    }
}

export default connectDatabase