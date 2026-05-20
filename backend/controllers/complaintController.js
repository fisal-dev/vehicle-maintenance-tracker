const Complaint = require('../models/Complaint');
const Vehicle = require('../models/Vehicle');

const complaintController = {
  getComplaints: async (req, res) => {
    try {
      const vehicles = await Vehicle.find({ userId: req.user.id });
      const vehicleIds = vehicles.map(v => v._id);

      const complaints = await Complaint.find({ vehicleId: { $in: vehicleIds } })
        .populate('vehicleId', 'make model registration')
        .sort({ date: -1 });

      res.json(complaints);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createComplaint: async (req, res) => {
    try {
      const { vehicleId, description } = req.body;
      const vehicle = await Vehicle.findOne({ _id: vehicleId, userId: req.user.id });
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found or unauthorized' });
      }

      const complaint = new Complaint({
        vehicleId,
        description,
        date: new Date(),
        status: 'danger',
        label: 'Open'
      });

      await complaint.save();
      
      // Set vehicle status to danger
      vehicle.status = 'danger';
      await vehicle.save();

      res.status(201).json(complaint);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = complaintController;
