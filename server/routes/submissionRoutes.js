import express from 'express';
import SubService from '../services/subServices.js';

const SubmissionRouter = express.Router();

SubmissionRouter.post('/create', SubService.createSubmission);
SubmissionRouter.post('/update', SubService.updateSubmission);
SubmissionRouter.get('/read', SubService.getSubmission);

export default SubmissionRouter;
