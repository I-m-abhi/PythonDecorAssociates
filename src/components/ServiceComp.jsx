import { Link, useLocation } from "react-router";
import SectionHead from "./SectionHead";

const ServiceComp = ({sectionHeading, details}) => {
  const location = useLocation();
  
  return (
    <section id='service-section'>
      <div className="container">
        <SectionHead sectionHeading={sectionHeading}/>
        <div className="grid grid-three-cols">
          {details.map((elem, id) =>
            <div key={id} className="item">
              <div className="img-box">
                <img
                  src={elem.projectImg} alt="Projects Details Loading..." />
                {elem.imageOf ? <h3>{elem.imageOf}</h3> : ''}
              </div>
              <div className="content-text">
                {elem.location ? <h4>{elem.location}</h4> : ''}
                <p>{elem.moreDetails}</p>
                {location.pathname === "/" && <button><Link to="/services">View More</Link></button>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceComp;