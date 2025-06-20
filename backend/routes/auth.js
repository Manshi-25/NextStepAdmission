import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import UserLog from '../models/UserLog.js';
import LogoutLog from '../models/LogoutLog.js';
const router = express.Router();


// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    await new UserLog({ email, action: 'signup' }).save();

     // Generate JWT token after user creation
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    await new UserLog({ email, action: 'login' }).save();
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


router.post('/logout', async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) return res.status(400).json({ message: 'Email is required' });

    await new LogoutLog({ email, action: 'logout' }).save();

    res.status(200).json({ message: 'Logout logged successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


export default router;
