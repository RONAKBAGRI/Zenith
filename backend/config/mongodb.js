import mongoose from "mongoose";

const connectMongoDB=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("MongoDB connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/zenith`)
}

export default connectMongoDB;