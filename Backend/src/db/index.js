import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const instanceOfDatabase = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected with Database`);
  } catch (error) {
    console.log(`MongoDB connection Failed ${error}`);
  }
};
export default connectDB;
