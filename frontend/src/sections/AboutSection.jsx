import img from "../assets/aboutimg.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="left">
          <img src={img} alt="" />
          <div className="exp">
            <div className="num">05</div>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="right">
          <h2>We turn spaces into stunning interiors.</h2>
          <p>Welcome to Python Decor & Associates – your trusted partner in transforming spaces into beautiful, functional environments.
            Headquartered in Delhi NCR, we offer comprehensive interior design and turnkey construction services across Faridabad, Noida, Greater Noida, and beyond.</p>
          <p>With over 5 years of experience, our expert team specializes in crafting personalized interiors that combine creativity with practical functionality. Let us bring your vision to life with thoughtful design and seamless execution.</p>
        </div>
      </div>
    </section>
  )
};

export default AboutSection;