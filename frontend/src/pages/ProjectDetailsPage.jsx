import PageHeader from "../components/PageHeader";
import ProjectDetails from "../sections/ProjectDetails";

const ProjectDetailsPage = ()=> {
  return (
    <div className="projectdetailspage">
      <PageHeader
        pageHeading='Our Signature Projects'
        pageDes='From concept to creation, we specialize in transforming spaces through thoughtful design, detailed planning, and exceptional execution—across both residential and commercial projects.'
        pageName={"Projects"}
      />
     <ProjectDetails />
    </div>
  )
};

export default ProjectDetailsPage;