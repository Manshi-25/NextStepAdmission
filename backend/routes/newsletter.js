import express from 'express';
import Subscriber from '../models/Subscriber.js';
import sendEmail from '../utils/sendEmail.js';

const router = express.Router();

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'You are already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    await sendEmail({
      to: email,
      subject: 'Thank You for Subscribing!',
      html: `
        <h3>Welcome to our newsletter!</h3>
        <p>NextStepAdmissiion provides expert educational consultancy services for career counseling, study abroad guidance, college admissions, and visa assistance.</p>
        <p> You'll now receive updates about education, scholarships, career tips, and more. </p>
      `
    });

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
