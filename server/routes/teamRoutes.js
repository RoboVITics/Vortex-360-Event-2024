import express from 'express';
import TeamService from '../services/teamServices.js'
import AuthMiddleware from '../middleware/authMiddleware.js';
const TeamRouter = express.Router();

TeamRouter.post('/create', [AuthMiddleware.requireAuth],TeamService.createTeam);
TeamRouter.post('/join',[AuthMiddleware.requireAuth],TeamService.joinTeam);
TeamRouter.get('/quit', [AuthMiddleware.requireAuth],TeamService.quitTeam);
TeamRouter.get('/read',[AuthMiddleware.requireAuth], TeamService.getTeam);

export default TeamRouter;