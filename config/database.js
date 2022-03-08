import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

const databaseURL = process.env.PHONES_DB_URI


const databaseConfig = () => {
  try {
    mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default databaseConfig;