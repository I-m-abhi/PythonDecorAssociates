import { Link } from "react-router";
import pageheaderbg from "../assets/pageheader.jpg";

const PageHeader = ({ pageHeading, pageDes, pageName }) => {
  return (
    <div className="page-header" style={{ backgroundImage: 'url(' + pageheaderbg + ')' }}>
      <div className="container">
        <div className="heading">{pageHeading}</div>
        <p className="des">{pageDes}</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>{pageName}</li>
        </ul>
      </div>
    </div>
  )
};

export default PageHeader;