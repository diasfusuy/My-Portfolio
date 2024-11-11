// Handlers for login and logout and authentication
import validator from 'express-validator';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

// Validate the usser credentials by password
//returns user on succes
async function authenticateUser({ email, password }) {
    const user = await User.findOne({email: email});
    if (!user) {
        console.log('user not found: ', email);
        return;
      }
      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) {
        console.log('invalid password for user: ', email);
        return;
      }
      
    //Generate jwt token
    const token = jwt.sign(
      {
        id: user_id,
        name: user_name,
        email: user_email,
        role: user_role, 
      },
      JWT_SECRET,
      { expiresIn: '4h' }
    );

    return {
      token,
      user: {
        id: user_id,
        name: user_name,
        email: user_email,
        role: user_role,
      },
    };
}

// test if token with valid user
export function isAuthenticated(req) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('=== debug: auth token receied: ', token);
    if (!token) {
      return false;
    }
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log('authentication error: ', err.message);
  }
}

    
    // Log in the user by email and password. Sets cookie with user details on success
    export async function login(req, res) {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error('email and password are required');
      }
      // Validate input
      const emailValid = validator.isEmail(email);
      const passwordValid = !validator.isEmpty(password);
      if (!emailValid || !passwordValid) {
        throw new Error('validation failed');
      }
      // Authenticate the user by password
      const result = await authenticateUser({ email, password });
      if (!result) {
        throw new Error('username or password invalid');
      }
    
    
   const { user, token } = result;
   return { user, toekn };
  }
    