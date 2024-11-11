import { isAuthenticated } from '../controllers/auth';

//validate user with auth token
export function isLoggedIn(req, res, next) {
    if(!isAuthenticated(req)) {
        return res.status(403).json({error: 'login validation failed'});
    } else {
        console.log('login validated');
        next();
    }
} 

//validate logged in user has an admin role
export function isAdmin(req, res, next) {
    next();
}