const ServiceCenter = require('../models/ServiceCenter');

const serviceCenterController = {
  getServiceCenters: async (req, res) => {
    try {
      const centers = await ServiceCenter.find().sort({ rating: -1 });
      res.json(centers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  createServiceCenter: async (req, res) => {
    try {
      const { name, location, contact, rating, status } = req.body;
      const center = new ServiceCenter({
        name,
        location,
        contact,
        rating: Number(rating) || 5.0,
        status: status || 'Open'
      });
      await center.save();
      res.status(201).json(center);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = serviceCenterController;
