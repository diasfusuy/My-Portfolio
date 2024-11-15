//Provider for Auth context
import { createContext, useContext, useEffect, useState } from 'react';
import authAPI from '../api/authAPI';

//define authContext
const AuthContext = createContext({
    user: undefined,
    token: undefined,
    isLoggedIn: false,
    login: async () => {},
    logout: async () => {},
});

//define our AuthContext Provider.
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState ({});
    const [token, setToken] = useState({});

    //Load previously loaded token when app loads
    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('authToken');
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            setIsLoggedIn(true);
        }
    }, [user]);

    async function login({ email, password }) {
        const response = await authAPI.login({ email, password });
        if (!response.success) {
            throw new Error('login failed:', response?.message || 'unknown error');
        }
        const { user, token } = response.data;
        if (!user || !token) {
            throw new Error('response user or token is empty');
        }

        //save use and auth token to localstorage
        console.log('login successful');
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authToken', token);

        //save user and token to satte
        setUser(user);
        setToken(token);
        setIsLoggedIn(true);

        return user;
    }
    async function logout() {
        try {
            //clear user and token from localstorage
            localStorage.removeItem('user');
            localStorage.removeItem('authToken');

            //clear data from state
            setUser(null);
            setToken(null);
            setIsLoggedIn(false);
            console.log('logged out');
        } catch (err) {
            console.error('Logout error:,', err);
        }
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
