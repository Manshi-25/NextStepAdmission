// models/UserLog.js
import mongoose from 'mongoose';

const userLogSchema = new mongoose.Schema({
  email: { type: String, required: true },
  action: { type: String, enum: ['signup', 'login', 'logout'], required: true },
  timestamp: { type: Date, default: Date.now },
});

const UserLog = mongoose.model('UserLog', userLogSchema);
export default UserLog;
