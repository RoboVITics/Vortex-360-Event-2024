import express from 'express';
import SubService from '../services/subServices.js';
import AuthMiddleware from '../middleware/authMiddleware.js';
import multer from 'multer';
const upload = multer({dest: '../files'});
const SubmissionRouter = express.Router();

SubmissionRouter.post('/create', upload.single("file"),[AuthMiddleware.requireAuth], SubService.createSubmission);
SubmissionRouter.post('/update',[AuthMiddleware.requireAuth], SubService.updateSubmission);
SubmissionRouter.get('/read',[AuthMiddleware.requireAuth], SubService.getSubmission);

export default SubmissionRouter;
