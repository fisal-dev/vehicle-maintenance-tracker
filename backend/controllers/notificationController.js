const Notification = require('../models/Notification');

const notificationController = {
  getNotifications: async (req, res) => {
    try {
      const notifications = await Notification.find({ userId: req.user.id }).sort({ createdAt: -1 });
      res.json(notifications);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  markRead: async (req, res) => {
    try {
      const notification = await Notification.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        { $set: { read: true } },
        { new: true }
      );
      if (!notification) {
        return res.status(404).json({ message: 'Notification not found' });
      }
      res.json(notification);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  clearAll: async (req, res) => {
    try {
      await Notification.deleteMany({ userId: req.user.id });
      res.json({ message: 'All notifications cleared' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = notificationController;
