import PageHeader from "../components/PageHeader";
import projectPageBg from '../assets/3.jpg';
import { useState } from "react";
import ProjectsComp from "../components/ProjectsComp";
import { projectDetails, projectHeading } from "../constants";

const Projects = () => {
  const [filteredProject, setFilteredProject] = useState(projectDetails);
  const [colorIndex, setColorIndex] = useState(0);
  const handleClick = (heading, id) => {
    if (heading === 'All') {
      setFilteredProject(projectDetails);
      setColorIndex(id);
    } else {
      const updatedProject = projectDetails.filter((item) => item.projectType === heading);
      setFilteredProject(updatedProject);
      setColorIndex(id);
    }
  };

  return (
    <div className="project-page">
      <PageHeader
        imgPath={projectPageBg}
        pageHeading='Masonry With 3 Columns'
        pageDes='The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.'
      />
      <div className="container">
        <div className="project-heading">
          <ul>
            {projectHeading.map((heading, id) =>
              <li
                style={{ color: (colorIndex === id) ? '#48C989' : '' }}
                onClick={() => handleClick(heading, id)} key={id}>{heading}
              </li>
            )}
          </ul>
        </div>
        <ProjectsComp sectionHeading={'Projects'} details={filteredProject}/>
      </div>
    </div>
  )
};

export default Projects;