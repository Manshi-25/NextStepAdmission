// models/LogoutLog.js
import mongoose from 'mongoose';

const LogoutLogSchema = new mongoose.Schema({
  email: String,
  time: { type: Date, default: Date.now }
});

export default mongoose.model('LogoutLog', LogoutLogSchema);
