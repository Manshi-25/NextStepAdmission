import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const auth = async (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];


      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by ID and exclude password from the result
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }

      next(); // Proceed to next middleware or route handler
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }else {
    // If no token provided
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

export default auth;
