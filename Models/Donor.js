const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  donatedAmount: {
    type: Number,
    required: true,
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
  blockchainTransactionId: {
    type: String,
  },
});

module.exports = mongoose.model('Donor', donorSchema);
