const mongoose = require('mongoose');

const ServiceCenterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  rating: { type: Number, default: 5.0 },
  status: { type: String, enum: ['Open', 'Closed'], default: 'Open' }
}, { timestamps: true });

module.exports = mongoose.model('ServiceCenter', ServiceCenterSchema);
