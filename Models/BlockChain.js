const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockchainSchema = new mongoose.Schema({
  transactionHash: {
    type: String,
    required: true,
    unique: true,
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  blockNumber: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'failed'],
    default: 'pending',
  },
});

module.exports = mongoose.model('Blockchain', blockchainSchema);
