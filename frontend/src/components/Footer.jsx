import { Link } from 'react-router';
import logo from '../assets/logo.png';
import blog1 from "../assets/Blogs/interior_trends_delhi_ncr_2025.png";
import blog2 from "../assets/Blogs/colour_texture_trends_ncr.png";
import blog3 from "../assets/Blogs/modular_kitchen_noida_remodeling.png";
import project1 from "../assets/projects/Screenshot (37).png";
import project2 from "../assets/projects/Screenshot (38).png"
import project3 from "../assets/projects/Screenshot (39).png"
import { IoIosCall } from 'react-icons/io';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="footer-logo">
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
          <p>At Python Decor & Associates, we specialize in premium interior and construction solutions that redefine spaces with elegance, texture, and functionality.</p>
        </div>

        <div className="projects">
          <h3>Recent Projects</h3>
          <ul>
            <li>
              <img src={project1} alt="Project 1" />
              <Link to="/projects">OH! MY NAILS - AMAR COLONY (FRANCHISE)</Link>
            </li>
            <li>
              <img src={project2} alt="Project 2" />
              <Link to="/projects">Residential Spaces Makeover</Link>
            </li>
            <li>
              <img src={project3} alt="Project 3" />
              <Link to="/projects">Commercial Spaces Makeover</Link>
            </li>
          </ul>
        </div>

        <div className="blogs">
          <h3>Recent Blogs</h3>
          <ul>
            <li>
              <img src={blog1} alt="Blog 1" />
              <Link to="/blogs">Top 5 Interior Design...</Link>
            </li>
            <li>
              <img src={blog2} alt="Blog 2" />
              <Link to="/blogs">Colour & Texture Magic...</Link>
            </li>
            <li>
              <img src={blog3} alt="Blog 3" />
              <Link to="/blogs">Modular Kitchens & Smart...</Link>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><span><FaLocationArrow className="icon" /></span>Graeter Noida, Noida, Delhi</p>
          <a href="mailto:pythondecorassociates@gmail.com">
            <p><span><MdOutlineMarkEmailRead className="icon" /></span>pythondecorassociates@gmail.com</p>
          </a>
          <a href="tel:+918130900340">
            <p><span><IoIosCall className="icon" /></span>+91 8130900340</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;