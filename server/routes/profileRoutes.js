import express from 'express'
import ProfileService from '../services/profileServices.js';
const ProfileRouter = express.Router();
import AuthMiddleware from '../middleware/authMiddleware.js';

ProfileRouter.post('/create',ProfileService.createProfile);
ProfileRouter.post('/update', [AuthMiddleware.requireAuth],ProfileService.updateProfile);
ProfileRouter.get('/read', [AuthMiddleware.requireAuth],ProfileService.getProfile);

export default ProfileRouter;