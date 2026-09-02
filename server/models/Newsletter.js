const mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name too long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    restaurant: {
      type: String,
      trim: true,
      maxlength: [150, 'Restaurant name too long'],
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'converted'],
      default: 'pending',
    },
    ip: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Newsletter', newsletterSchema)
