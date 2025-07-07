import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const QuotePopup = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
    files: [],
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Lock scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "files") {
      setFormData({ ...formData, files: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect file names
    const uploadedFileNames = formData.files.map(file => file.name).join(", ");

    const formBody = new URLSearchParams();
    formBody.append("fullName", formData.fullName);
    formBody.append("email", formData.email);
    formBody.append("phone", formData.phone);
    formBody.append("propertyType", formData.propertyType);
    formBody.append("message", formData.message);
    formBody.append("files", uploadedFileNames);  // ⬅️ Append file names
    formBody.append("timestamp", new Date().toLocaleString());

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      const result = await response.text();

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
        files: [],
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Form submit error:", error);
    }
  };


  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}><IoClose /></button>

        {submitted ? (
          <div className="success-message">
            <FaCheckCircle className="icon" />
            <p>Form submitted successfully!</p>
          </div>
        ) : (
          <>
            <h2>Get a Quote</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <div className="phone-group">
                <span className="flag">🇮🇳 +91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, '');
                    setFormData({ ...formData, phone: cleaned });
                  }}
                  maxLength={10}
                  pattern="\d*"
                />
              </div>

              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Select Property Type</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <input
                type="file"
                name="files"
                accept=".pdf,image/*"
                multiple
                onChange={handleChange}
              />

              <button type="submit" className="btn">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default QuotePopup;