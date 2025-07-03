import PageHeader from "../components/PageHeader";
import ProjectList from "../sections/ProjectList";
import { projectDetails } from "../utils/data";

const Projects = () => {
  return (
    <div className="project-page">
      <PageHeader
        pageHeading='Masonry With 3 Columns'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <ProjectList projects={projectDetails} heading="All Projects" />
    </div>
  )
};

export default Projects;