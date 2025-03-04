const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: String,
  position: String,
  status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'], default: 'Applied' },
  dateApplied: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', ApplicationSchema);
