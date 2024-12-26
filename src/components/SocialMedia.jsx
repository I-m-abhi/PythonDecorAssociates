import { LiaWhatsapp } from "react-icons/lia";
import { GrFacebookOption } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiPinterestLogo } from "react-icons/pi";

const SocialMedia = () => {

  return (
    <section className="social-media">
      <ul>
        <li className="media-icons"> <LiaWhatsapp /> </li>
        <li className="media-icons"> <GrFacebookOption /> </li>
        <li className="media-icons"> <PiInstagramLogo /> </li>
        <li className="media-icons"> <LiaLinkedinIn /> </li>
        <li className="media-icons"> <PiPinterestLogo /> </li>
      </ul>
    </section>
  )
};

export default SocialMedia;