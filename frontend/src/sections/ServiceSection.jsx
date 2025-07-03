import { serviceDetails } from "../utils/data";

const ServiceSection = () => {
  return (
    <section className="service-section container">
      <h2>Our Services</h2>
      <div className="grid">
        {serviceDetails.map((elem, id) =>
          <div key={id} className="item">
            <div className="img-box">
              <img src={elem.projectImg} alt="Projects Details Loading..." />
            </div>
            <div className="content-text">
              {elem.imageOf && <h3>{elem.imageOf}</h3>}
              <p>{elem.moreDetails}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
};

export default ServiceSection;