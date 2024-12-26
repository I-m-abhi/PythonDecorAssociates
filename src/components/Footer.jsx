import { IoLocation } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer id="footer-section">
      <div className="container">
        <div className="grid grid-three-cols">
          <div className="intro-sec">
            <h2>Python Decor & Associates</h2>
            <p>7X Theme is a html template for interior and architecture purpose. Today we can tell you, thanks to your passion.</p>
          </div>
          <div className="link-sec">
            <h2>Useful links</h2>
            <div>
              <ul>
                <Link className='link' to='/'><li>Home</li></Link>
                <Link className='link' to='/services'><li>Services</li></Link>
                <Link className='link' to='/projects'><li>Projects</li></Link>
                <Link className='link' to='/blogs'><li>Blogs</li></Link>
                <Link className='link' to='/faq'><li>FAQ</li></Link>
              </ul>
            </div>
          </div>
          <div className="contact-sec">
            <h2>Contact Us</h2>
            <div className="sec-content">
              <ul>
                <li><IoLocation /></li>
                <li> Python Decor & Associates <br />
                  C-2207, Coco County <br />
                  Greater Noida, UP, 201301 <br />
                  ( Visit by Appointment Only )
                </li>
              </ul>
              <ul>
                <li><MdMarkEmailUnread /></li>
                <li> pythondecorassociates@gmail.com</li>
              </ul>
              <ul>
                <li><FaPhone /></li>
                <li> +91 8271197098</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-sec">
          <p>© 2022 Your Company. Designed By 7xtheme.</p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
};

export default Footer;