// router for contacts
import express from 'express';
const authRouter = express.Router();
import { login } from '../controllers/auth';

//log in with email and password
authRouter.post('/login', async (req, res) => {
    try {
       const { user, token } = await login (req, res);
       res.status(200).json({
        succes: true,
        message: 'login succesful',
        data: {
            user,
            token,
        },
       });
    }catch (err) {
        res.status(401).json({error: err.message});
    }
});

export default authRouter;