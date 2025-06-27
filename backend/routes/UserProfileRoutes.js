import express from 'express';
import { getMyProfile, updateMyProfile } from '../controllers/UserProfileController.js';
import auth from '../middleware/AuthMiddleware.js';
import upload from '../middleware/multer.js';
const router = express.Router();

// Get Profile
router.get('/me', auth, getMyProfile);

// Create/Update Profile
router.put('/me', auth, upload.single('profilePic'), updateMyProfile);

export default router;