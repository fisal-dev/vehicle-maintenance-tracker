const FuelLog = require('../models/FuelLog');
const Vehicle = require('../models/Vehicle');

const fuelController = {
  getFuelLogs: async (req, res) => {
    try {
      const vehicles = await Vehicle.find({ userId: req.user.id });
      const vehicleIds = vehicles.map(v => v._id);

      const logs = await FuelLog.find({ vehicleId: { $in: vehicleIds } })
        .populate('vehicleId', 'make model registration')
        .sort({ date: -1 });

      res.json(logs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createFuelLog: async (req, res) => {
    try {
      const { vehicleId, date, liters, cost, mileage } = req.body;
      const vehicle = await Vehicle.findOne({ _id: vehicleId, userId: req.user.id });
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found or unauthorized' });
      }

      const log = new FuelLog({
        vehicleId,
        date: date || new Date(),
        liters: Number(liters),
        cost: Number(cost),
        mileage: Number(mileage)
      });

      await log.save();

      // Update vehicle's mileage telemetry dynamically
      vehicle.mileage = `${Number(mileage).toLocaleString()} km`;
      await vehicle.save();

      res.status(201).json(log);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = fuelController;
