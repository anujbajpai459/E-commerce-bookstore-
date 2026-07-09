import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default conn;