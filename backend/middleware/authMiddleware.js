const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretjwtkey123!');
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Authorization denied' });
    }
    
    req.user = {
      id: decoded.id,
      role: user.role || 'customer',
      ownerId: user.ownerId,
      assignedGarages: user.assignedGarages || [],
      effectiveId: user.role === 'manager' ? user.ownerId : decoded.id
    };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
