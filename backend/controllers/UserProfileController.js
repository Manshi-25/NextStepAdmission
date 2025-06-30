// controllers/UserProfileController.js

import UserProfile from '../models/UserProfile.js';

export const getMyProfile = async (req, res) => {
    try {
        const profile = await UserProfile.findOne({user:req.user._id});
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    } catch (err) {
        console.error('Error fetching profile:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateMyProfile = async (req, res) => {
    try {
        const userId = req.user._id;

        let profile = await UserProfile.findOne({user:userId});

        if (!profile) {
            const profileData = {
                user: userId,
                email:req.user.email,
                ...req.body
            };
            //simple fields
            const allowedFields = ['name', 'phone', 'dob', 'gender', 'age', 'address1', 'address2', 'city', 'state', 'country', 'zip'];
            allowedFields.forEach(field => {
                if (req.body[field] !== undefined) {
                    profileData[field] = req.body[field];
                }
            });

            // Handle skills
            if (req.body.skills) {
                if (Array.isArray(req.body.skills)) {
                    profileData.skills = req.body.skills;
                } else {
                    profileData.skills = [req.body.skills];
                }
            }

            // Handle schooling
            const schooling = {};
            Object.keys(req.body).forEach(key => {
                if (key.startsWith('schooling.')) {
                    const subKey = key.split('.')[1];
                    schooling[subKey] = req.body[key];
                }
            });
            profileData.schooling = schooling;


            //handle profile picture
            if (req.file) {
                profileData.profilePic = req.file.path;
            }

            profile = new UserProfile(profileData);
            await profile.save();
            return res.status(201).json(profile);
        }

        

        //updating existing profile
        const allowedFields = [
            'name', 'phone', 'dob', 'gender', 'age', 'address1', 'address2', 'city', 'state', 'country', 'zip'
        ];
        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) {
                profile[field] = req.body[field];
            }
        });

        //handle skills
        if (req.body.skills) {
            if (Array.isArray(req.body.skills)) {
                profile.skills = req.body.skills;
            } else {
                profile.skills = [req.body.skills]; // In case it's a single skill string
            }
        }

        //handle schooling
        if (!profile.schooling) profile.schooling = {}; // Ensure schooling object exists

        Object.keys(req.body).forEach(key => {
            if (key.startsWith('schooling.')) {
                const subKey = key.split('.')[1];
                profile.schooling[subKey] = req.body[key];
            }
        });

        //handle profile picture
        if (req.file) {
            profile.profilePic = req.file.path;
        }

        // Save updated profile
        await profile.save();

        res.json(profile);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};
