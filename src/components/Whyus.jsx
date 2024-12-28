import { whyUs } from "../constants";
import SectionHead from "./SectionHead";

const Whyus = () => {
  return (
    <section className="whyus-section">
      <div className="container">
        <SectionHead sectionHeading={'Why us'} />
        <div className="grid grid-six-cols">
          {whyUs.map((elem, id) => {
            return (
              <div key={id} className="content">
                <div className="img-box">
                  <img src={elem.img} alt="" />
                </div>
                <p>{elem.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default Whyus;