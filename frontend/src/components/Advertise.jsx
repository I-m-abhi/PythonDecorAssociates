import { useOutletContext } from "react-router";

const Advertise = () => {
    const { openQuotePopup } = useOutletContext();

  return (
    <div className="ad">
      <div className="container">
        <h3>From concept to creation-we've got you!</h3>
        <button onClick={openQuotePopup} className="btn">Contact us</button>
      </div>
    </div>
  )
};

export default Advertise;