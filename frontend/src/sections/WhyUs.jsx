import icon1 from "../assets/icons/chair.png";
import icon2 from "../assets/icons/log.png";
import icon3 from "../assets/icons/decor.png";
import icon4 from "../assets/icons/offer.png";

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="item">
          <img className="whyus-icon" src={icon1} alt="" />
          <h3>Attention to Detail</h3>
          <p>We believe that great design lives in the details. From the precise alignment of paneling to the finishing touches on trims and textures, we ensure every element of your space is executed with care and craftsmanship.</p>
        </div>
        <div className="item">
          <img className="whyus-icon" src={icon2} alt="" />
          <h3>High-Quality Materials</h3>
          <p>We source only premium-grade materials, including Century, Saint Gobain, and Kajaria brands, ensuring your interiors are built to last — delivering both visual appeal and structural durability.</p>
        </div>
        <div className="item">
          <img className="whyus-icon" src={icon3} alt="" />
          <h3>Personalized Service</h3>
          <p>Your space, your style. We offer tailored design solutions that reflect your lifestyle, taste, and needs — from concept to completion, you’ll always be part of the creative journey.</p>
        </div>
        <div className="item">
          <img className="whyus-icon" src={icon4} alt="" />
          <h3>Affordable Price</h3>
          <p>We bring you high-end design and execution without breaking the bank. With smart planning, material efficiency, and transparent billing, we offer premium quality at accessible prices.</p>
        </div>
      </div>
    </section>
  )
};

export default WhyUs;