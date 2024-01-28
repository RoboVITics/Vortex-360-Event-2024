import express from 'express';
import TeamService from '../services/teamServices.js'

const TeamRouter = express.Router();

TeamRouter.post('/create', TeamService.createTeam);
TeamRouter.post('/update', TeamService.updateTeam);
TeamRouter.get('/read', TeamService.getTeam);

export default TeamRouter;