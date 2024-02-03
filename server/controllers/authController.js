import jwt from 'jsonwebtoken';
import AuthService from '../services/authServices.js';
const jwtSecret = "vortex360";
const maxAge = 3600;
class AuthController {
  // handle errors
  static handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {code: err.code, message: err.message};
    return errors;
  };

  // controller actions
  static signup = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
      const user = await AuthService.createUser(data.email, data.password);
      console.log(user);
      const token = jwt.sign({user: data.email}, jwtSecret, { expiresIn: 3600});
      res.cookie('jwt', token, { maxAge: maxAge * 1000 });
      res.status(201).json({ user: user, token: token });
    }
    catch(err) {
      const errors = this.handleErrors(err);
      res.status(400).json({ errors });
    }
  
  }

  static login = async (req, res) => {
    const data = req.body;
    try {
      const user = await AuthService.loginUser(data.email, data.password);
      const token = jwt.sign({user: data.email}, jwtSecret, { expiresIn: 3600});
      res.cookie('jwt', token, { maxAge: maxAge * 1000 });
      res.status(201).json({ user: user, token: token });
    } 
    catch (err) {
      const errors = this.handleErrors(err);
      res.status(400).json({ errors });
    }

  }

  static logout = async (req, res) => {
    await AuthService.logout();
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json({ msg: "Logged Out" });
  }

  static googleAuthLogin = async (req,res) => {
    const data = req.body;
    try {
      const user = await AuthService.googleAuth(data.email, data.user);
      const token = jwt.sign({user: data.email}, jwtSecret, { expiresIn: 3600});
      res.status(201).json({ user: user, token: token });
  
    } 
    catch (err) {
      const errors = this.handleErrors(err);
      res.status(400).json({ errors });
    }
    
  }
};

export default AuthController;
