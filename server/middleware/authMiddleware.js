import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
import { json } from 'express';
config();

class AuthMiddleware {

  static requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, process.env.jwtSecret, (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({ message: "Authorization Failed" });
        } else {
          next();
        }
      });
    } else {
      console.log("No token");
      res.status(401).json({ message: "Unauthorized Request" });
    }
  };

  // check current user
  static checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.jwtSecret, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          res.locals.user = decodedToken.user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };
  
  static extractToken = (token) => {
    var user = "";
    jwt.verify(token, process.env.jwtSecret, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        user = undefined;
      } else {
        user = decodedToken;
      }
    });
    return user;
  };
};


export default AuthMiddleware;