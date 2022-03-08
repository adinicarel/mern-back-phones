import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

const databaseURL = "mongodb+srv://adrian:phonebook@phonebook.si5yw.mongodb.net/myPhones?retryWrites=true&w=majority";


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