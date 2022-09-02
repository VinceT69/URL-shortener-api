const mongoose = require('mongoose');
const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB');
    throw error;
  }

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log('Closed MongoDB connection successfully');
    process.exit(1);
  });
};
module.exports = { connectDB };
