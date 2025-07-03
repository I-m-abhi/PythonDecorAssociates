import ProjectCard from "../components/ProjectCard";

const ProjectList = ({ projects, heading = "Our Projects" }) => {
  return (
    <section className="project-section container">
      <h2>{heading}</h2>
      <div className="grid grid-three-cols">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;