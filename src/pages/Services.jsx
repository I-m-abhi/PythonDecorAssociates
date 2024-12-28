import PageHeader from "../components/PageHeader";
import ServiceComp from "../components/ServiceComp";
import { serviceDetails } from "../constants";
import faqPageBg from '../assets/7.jpg';

const Services = () => {
  return (
    <div>
      <PageHeader
        imgPath={faqPageBg}
        pageHeading='Frequently Asked'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <ServiceComp sectionHeading={'Services'} details={serviceDetails} />
    </div>
  )
};

export default Services;