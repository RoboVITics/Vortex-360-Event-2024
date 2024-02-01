import express from 'express'
import AuthController from '../controllers/authController.js';
import AuthService from '../services/authServices.js';


const AuthRouter = express.Router();

AuthRouter.post('/signup', AuthController.signup);
AuthRouter.post('/login', AuthController.login);
AuthRouter.get('/logout', AuthController.logout);
AuthRouter.post('/google', AuthController.googleAuthLogin);


export default AuthRouter;