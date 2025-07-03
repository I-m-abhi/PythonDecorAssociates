import HeroSlider from "../components/HeroSlider";
import WhyUs from "../sections/WhyUs";
import AboutSection from "../sections/AboutSection";
import ServiceSection from "../sections/ServiceSection";
import ProjectList from "../sections/ProjectList";
import BlogSection from "../sections/BlogSection";
import Advertise from "../components/Advertise";
import { projectDetails } from "../utils/data";

const Home = () => {

  const featuredProjects = projectDetails.filter(project => project.featured);

  return (
    <div className="home-page">
      <HeroSlider />
      <WhyUs />
      <AboutSection />
      <ServiceSection />
      <Advertise />
      <ProjectList projects={featuredProjects} heading="All Projects" />
      <BlogSection />
    </div>
  )
};

export default Home;