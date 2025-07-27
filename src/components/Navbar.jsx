import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo'>
        <Link to="/" className="logo">
          <img src="" alt="Logo" />
        </Link>
      </div> 
      <div className="search-btn">
        <input type="text" placeholder="Search..." />
        <button><img src="" alt="Search" /></button>
      </div>
      <div className="links">
        <Link to="/about_us">About</Link>
        <Link to="/">Home</Link>
        <Link to="/contact_us">Contact</Link>
        <Link to="/map">Map</Link>
      </div>
    </nav>
  );
}

export default Navbar;