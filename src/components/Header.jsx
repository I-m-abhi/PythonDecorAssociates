import { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';
import GetInTouch from './GetInTouch';

const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [getInTouch, setGetInTouch] = useState(false);

  const fixedOnScroll = () => {
    if (window.scrollY >= 100) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  };
  window.addEventListener("scroll", fixedOnScroll);

  const openGetInTouch = () => {
    setGetInTouch(true);
  };

  return (
    <>
      <header className={fixedHeader ? 'header-section fixed' : 'header-section'}>
        <div className="container">
          <div className='header-brand'>
            <div className="logo">
              <img src={logo} alt="Python Decor & Associates" />
            </div>
            <h1>Python Decor <br /><span>& Associates</span></h1>
          </div>
          <nav className='navbar'>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/projects'>Projects</NavLink></li>
              <li><NavLink to='/blogs'>Blogs</NavLink></li>
              <li><NavLink to='/faq'>FAQ</NavLink></li>
            </ul>
          </nav>
          <div className="connect">
            <button onClick={openGetInTouch}>Get in Touch</button>
          </div>
        </div>
      </header>
      <GetInTouch getInTouch={getInTouch} setGetInTouch={setGetInTouch} />
    </>
  )
};

export default Header;