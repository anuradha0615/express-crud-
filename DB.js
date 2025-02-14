const mongoose = require("mongoose");

const dburl = "mongodb+srv://demoproject:demoproject@cluster0.pj2dg.mongodb.net/"
const connectDB = async () => {
  try {
    await mongoose.connect(dburl); // Removed useUnifiedTopology
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;