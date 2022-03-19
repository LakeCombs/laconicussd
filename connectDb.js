const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(`An error occured : ${error.message}`);
  }
};

module.exports = connectDB;
