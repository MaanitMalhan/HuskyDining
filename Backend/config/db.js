import mongoose from "mongoose";
import color from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta.bold);
  } catch (error) {
    console.error(`Error; ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
