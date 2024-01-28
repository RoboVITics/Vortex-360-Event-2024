import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import AuthMiddleware from './middleware/authMiddleware.js';

import AuthRouter from './routes/authRoutes.js';
import ProfileRouter from './routes/profileRoutes.js';
import SubmissionRouter from './routes/submissionRoutes.js';
import TeamRouter from './routes/teamRoutes.js';

//Env files:
import 'dotenv'
import cors from 'cors';
import { config } from 'dotenv';
config();

const port = 3000
const app = express();

// middleware
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());

// routes
app.get('*', AuthMiddleware.checkUser);

app.get('/', (req,res) => {
  res.send({"message" : "This app is running!"});
})
app.get('/dashboard', AuthMiddleware.requireAuth, (req, res) => {
  res.send({"message":"Dashboard"})
});
app.use('/auth',AuthRouter);
app.use('/profile',ProfileRouter);
app.use('/submissions',SubmissionRouter);
app.use('/teams',TeamRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})