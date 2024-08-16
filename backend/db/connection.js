import mongoose from "mongoose";

const connection = async () => {
    try {
        // Connect to MongoDB using environment variable MONGO_URI
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

export default connection;

