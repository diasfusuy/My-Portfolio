import { useAuth } from "../context/AuthProvider";
import { Navigate } from 'react-router-dom';

//Wrapper for required pages
const ProtectedRoute = ({ children }) => {
    const { user, isLoggedIn } = useAuth();
    if ( !user || !isLoggedIn ) {
        return <Navigate to='/login' replace />
    }
    return children;
 };

 export default ProtectedRoute;