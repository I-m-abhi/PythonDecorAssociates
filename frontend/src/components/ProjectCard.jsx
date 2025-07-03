import { Link } from "react-router";
import { FaUserTie, FaHouseDamage, FaMapMarkerAlt } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";

const infoArray = [
  { key: "clientName", label: "Client Name", icon: FaUserTie },
  { key: "society", label: "Society", icon: FaHouseDamage },
  { key: "location", label: "Location", icon: FaMapMarkerAlt },
  { key: "time", label: "Time Frame", icon: IoTimerSharp },
];

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${slugify(project.slug)}/${project.id}`}
      className="project-card"
    >
      <div className="img-box">
        <span className="badge">{project.badge}</span>
        <img src={project.imgList[0]} alt={project.alt} loading="lazy" />
      </div>
      <div className="project-info">
        {infoArray.map(({ key, label, icon: Icon }) =>
          project[key] ? (
            <div className="info-card" key={key}>
              <Icon />
              <div className="info-block">
                <h4>{label}</h4>
                <p>{project[key]}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;