const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'crypto', 'bank_transfer'],
    required: true,
  },
  transactionId: {
    type: String,
    unique: true,
  },
  blockchainTransactionId: {
    type: String,
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Donation', donationSchema);
