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
    const body = req.body;
    const { email, password } = body;
    console.log(email);
    try {
      const user = await AuthService.createUser(email, password);
      console.log(user);
      const token = jwt.sign({user: data.email}, jwtSecret, { expiresIn: 3600});
      console.log(token);
      res.cookie('jwt', token, { maxAge: maxAge * 1000 });
      res.status(201).json({ user: user });
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

      // const payload = {
      //   user: {
      //       id: data.email 
      //   }
      // }
      // jwt.sign(payload,
      //   process.env.jwtSecret, // Add your personal JWT Secret key in default.json
      //   { expiresIn: 3600 }, // Change this to 3600 during production!! 
      //   (err, token)=>{
      //       if (err) throw err;
      //       return res.json({ token: token });
      //   }); 
      console.log(token);
      res.cookie('jwt', token, { maxAge: maxAge * 1000 });
      res.status(201).json({ user: user });
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
};

export default AuthController;
