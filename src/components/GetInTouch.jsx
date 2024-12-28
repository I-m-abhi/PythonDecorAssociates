import { MdMarkEmailUnread } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";

const GetInTouch = ({ getInTouch, setGetInTouch }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const closeGetInTouch = () => {
    setGetInTouch(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      userName: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsFormSubmit(true);
    setTimeout(() => {
      setIsFormSubmit(false)
    }, 2000)
  }

  return (
    <>
      {getInTouch &&
        (<section className="getInTouch-section">
          {isFormSubmit && <div className="form-submit">
            <button>Form submitted sucessfully</button>
          </div>}
          <div className="container grid grid-two-cols">
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
            <div className="contact-form">
              <form action="" onSubmit={handleSubmit}>
                <div className="input-field">
                  <label htmlFor="name">Name*</label><br />
                  <input
                    onChange={handleInputChange}
                    value={formData.userName}
                    type="text"
                    name="userName"
                    id="name"
                    required
                    autoComplete="true"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label><br />
                  <input
                    onChange={handleInputChange}
                    value={formData.email}
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="true"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Phone</label><br />
                  <input
                    onChange={handleInputChange}
                    value={formData.phone}
                    type="number"
                    name="phone"
                    id="phone"
                    required
                    autoComplete="true"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Property Details</label><br />
                  <textarea
                    onChange={handleInputChange}
                    value={formData.message}
                    name="message"
                    id="message"
                    required>
                  </textarea>
                </div>
                <div>
                  <button type="submit">Submit Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="cross">
            <RxCross2 onClick={closeGetInTouch} />
          </div>
        </section>
        )
      }
    </>
  )
};

export default GetInTouch;