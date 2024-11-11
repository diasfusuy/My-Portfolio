import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import './Navigation.css';

const NavBar = () => {
    return (
        <nav id="navigation">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/blogs" className="nav-item">
        Blogs
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
      <Link to="/projects" className="nav-item">
        Projects
      </Link>
      <Link to="/contact" className="nav-item">
        Contact
      </Link>
      <Link to="/login" className="nav-item">
        Login
      </Link>
      <Link to="/ExamplePrivatePage">Private</Link>
    </nav>
    );
};

export default NavBar;
