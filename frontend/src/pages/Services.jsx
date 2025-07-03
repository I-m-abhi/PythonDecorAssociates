import PageHeader from "../components/PageHeader";
import ServiceSection from "../sections/ServiceSection";

const Services = () => {
  return (
    <div className="service-page">
      <PageHeader
        pageHeading='Masonry With 3 Columns'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <ServiceSection />
    </div>
  )
};

export default Services;