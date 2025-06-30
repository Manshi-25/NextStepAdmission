// models/UserProfileModel.js (ES Module version)

import mongoose from 'mongoose';

const SchoolingSchema = new mongoose.Schema({
    tenthSchool: String,
    tenthMarks: String,
    tenthYear: String,
    schoolType: String,
    twelfthSchool: String,
    twelfthMarks: String,
    twelfthYear: String,
    college: String,
    currentCourse: String,
    specialization: String,
    currentYear: String,
    cgpa: String,
    currentStatus: String
},{ _id: false });

const UserProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },
    name: String,
    email: { type: String, unique: true },
    phone: String,
    dob: String,
    gender: String,
    age: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    country: String,
    zip: String,
    skills: [String],
    schooling: SchoolingSchema,
    profilePic: String,
    password: String
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

export default UserProfile;
