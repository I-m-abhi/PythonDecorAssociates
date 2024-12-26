import About from "../components/About";
import Informative from "../components/Informative";
import MainSlider from "../components/MainSlider";
import ProjectsComp from "../components/ProjectsComp";
import ServiceComp from "../components/ServiceComp";
import Whyus from "../components/Whyus";
import { projectDetails, serviceDetails } from "../constants";

const Home = ()=> {
  return (
    <div className="home-page">
      <MainSlider />
      <About />
      <Whyus />
      <ServiceComp sectionHeading={'Services'} details={serviceDetails}/>
      <Informative />
      <ProjectsComp sectionHeading={'Projects'} details={projectDetails}/>
    </div>
  )
};

export default Home;