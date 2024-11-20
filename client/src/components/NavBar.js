import { Link } from 'react-router-dom';
import './Navigation.css';

const NavBar = () => {
    return (
        <nav className="navbar">
          <div className='logo'>
            <img src='/assest/logo.png' alt='logo'/>
          </div>
        <ul className='nav-links'>
          <li>    
      <Link to="/" className="nav-item">
        Home
      </Link>
          </li>
          <li>
      <Link to="/about" className="nav-item">
        About
      </Link>
        </li>
        <li>
      <Link to="/blogs" className="nav-item">
        Blogs
      </Link>
      </li>
      <li>
      <Link to="/portfolio" className="nav-item">
        Portfolio
      </Link>
      </li>
      <li>
      <Link to="/contact" className="nav-item">
        Contact
      </Link>
      </li>
      <li>
      <Link to="/login" className="nav-item">
        Login
      </Link>
      </li>
      <li>
      <Link to="/ExamplePrivatePage">Private</Link>
      </li>
      </ul>
    </nav>
    );
};

export default NavBar;
