import express from 'express'
import AuthController from '../controllers/authController.js';

const AuthRouter = express.Router();

AuthRouter.post('/signup', AuthController.signup);
AuthRouter.post('/login', AuthController.login);
AuthRouter.get('/logout', AuthController.logout);

export default AuthRouter;