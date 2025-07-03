import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const TopBar = () => {

  return (
    <section className="topbar-section">
      <div className="container">
        <a href="mailto:pythondecorassociates@gmail.com">
          <p><span><MdOutlineMarkEmailRead className="icon" /></span>
            pythondecorassociates@gmail.com
          </p>
        </a>
        <p className="topbar-hide">Get Up to 15% Off on Turnkey Interior Projects</p>
        <a href="tel:+918130900340">
          <p><span><IoIosCall className="icon" /></span>+91 8130900340</p>
        </a>
      </div>
    </section>
  )
};

export default TopBar;