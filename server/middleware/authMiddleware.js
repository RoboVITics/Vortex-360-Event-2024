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
          console.log(decodedToken);
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
};



// export default function (req, res, next) {
//     // Get the token from header:
//     const token = req.header('x-auth-token');

//     // Check if no token:
//     if(!token){
//         return res.status(401).json({msg: 'No token, authorization denied'});
//     }

//     // Verify if token exists
//     try{
//         const decoded = jwt.verify(token, process.env.jwtToken);
//         req.user = decoded.user;
//         next();
//     } catch (err){
//         return res.status(401).json({msg: 'Invalid token, authorization denied'});
//     }
// }


export default AuthMiddleware;