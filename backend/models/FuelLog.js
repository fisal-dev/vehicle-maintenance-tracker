const mongoose = require('mongoose');

const FuelLogSchema = new mongoose.Schema({
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  date: { type: Date, required: true },
  liters: { type: Number, required: true },
  cost: { type: Number, required: true },
  mileage: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('FuelLog', FuelLogSchema);
