import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from './models/contact.js';
import authRoutes from './routes/auth.js'; 
dotenv.config();

// ✅ Define `app` before using it
  const app = express();

app.use(cors({ origin:'*'}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ✅ POST endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    const contact = new Contact({ name, email, phone, service, message });
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Enquiry@nextstepadmission.in',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
