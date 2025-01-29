const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../config.env` });

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

mongoose.set('strictQuery', true);


module.exports = connectDB;