import express from 'express'
import ProfileService from '../services/profileServices.js';
const ProfileRouter = express.Router();
import AuthMiddleware from '../middleware/authMiddleware.js';

ProfileRouter.post('/create',[AuthMiddleware.requireAuth],ProfileService.createProfile);
ProfileRouter.put('/update', ProfileService.updateProfile);
ProfileRouter.get('/read', ProfileService.getProfile);

export default ProfileRouter;