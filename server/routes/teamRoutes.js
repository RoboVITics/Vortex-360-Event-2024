import express from 'express';
import TeamService from '../services/teamServices.js'
import AuthMiddleware from '../middleware/authMiddleware.js';
const TeamRouter = express.Router();

TeamRouter.post('/create', [AuthMiddleware.requireAuth],TeamService.createTeam);
TeamRouter.post('/update', [AuthMiddleware.requireAuth],TeamService.updateTeam);
TeamRouter.get('/read',[AuthMiddleware.requireAuth], TeamService.getTeam);

export default TeamRouter;