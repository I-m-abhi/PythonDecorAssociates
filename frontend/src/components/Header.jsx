import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FiX } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo.png";

const Header = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header-section ${scrolled ? "fixed-header" : ""}`}>
      <div className="container">

        <Link to="/" className="logo" aria-label="Python Decor & Associates Home">
          <img
            src={logo}
            alt="Python Decor & Associates official logo"
            className="logo-img"
          />
          <div className="logo-text">
            <div className="python">PYTHON</div>
            <div className="decor">Decor & Assoc</div>
          </div>
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-expanded={menuOpen}>
          <ul id="nav-menu">
            <li><Link to="/" className={isActive("/") ? "active" : ""}>Home</Link></li>
            <li>
              <span className="shop-link">
                Shop
                <span className="tooltip">Coming Soon</span>
              </span>
            </li>
            <li><Link to="/services" className={isActive("/services") ? "active" : ""}>Services</Link></li>
            <li><Link to="/projects" className={isActive("/projects") ? "active" : ""}>Projects</Link></li>
            <li><Link to="/blogs" className={isActive("/blogs") ? "active" : ""}>Blogs</Link></li>
          </ul>
        </nav>

        <div className="right-items">
          <button onClick={onQuoteClick} className="btn">Get a Quote</button>
          <button
            className="menu-icon"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX className="nav-icon" /> : <CiMenuBurger className="nav-icon" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;