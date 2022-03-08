// models.js
import mongoose from 'mongoose';

const PhoneListSchema = new mongoose.Schema({
  /* _id: {
    type: mongoose.Schema.ObjectId,
    auto: true,
  }, */
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  manufacturer: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 500
  },
  color: {
    type: String,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
  },
  imageFilename: {
    type: String,
  },
  screen: {
    type: String,
    maxlength: 100
  },
  ram: {
    type: Number,
    min: 1,
    max: 128
  }
});

const Phone = mongoose.model('Phone', PhoneListSchema);

export default Phone