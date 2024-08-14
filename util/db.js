const mongoose = require("mongoose")

// const mongoDbUri = process.env.MONGODB_URI;
const mongoDbUri = process.env.MONGODB_PRODUCTION_URI;

const connectDb = async () => {
  try {
    return mongoose.connect(mongoDbUri)
  } catch (error) {
    return new Error(error)
  }
}

module.exports = connectDb