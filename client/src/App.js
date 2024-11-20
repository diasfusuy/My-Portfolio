import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import ExamplePrivatePage from './pages/ExamplePrivatePage';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import HeroSection from './components/HeroSection';
import './components/Global.css';


function App() {
    return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<HeroSection/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/contact' element={<Contact/>} />  
            <Route path='/profile' element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            }
            />
            <Route path='/examplePrivatePage' element={
                <ProtectedRoute>
                    <ExamplePrivatePage />
                </ProtectedRoute>
            }
            />
        </Routes>
    </Router>
    )
}

export default App;
