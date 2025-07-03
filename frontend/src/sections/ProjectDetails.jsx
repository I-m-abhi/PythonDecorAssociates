import { useParams } from "react-router";
import { projectDetails } from "../utils/data";
import { FaUserTie, FaHouseDamage, FaMapMarkerAlt, FaRulerCombined, FaCalendarAlt } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails.find((item) => item.id.toString() === id);

  if (!project) {
    return <div className="container">Project not found.</div>;
  }

  const detailsMap = [
    { label: "Client Name", value: project.clientName, icon: FaUserTie },
    { label: "Society Name", value: project.society, icon: FaHouseDamage },
    { label: "Location", value: project.location, icon: FaMapMarkerAlt },
    { label: "Area (SQFT)", value: project.area, icon: FaRulerCombined },
    { label: "Year", value: project.year, icon: FaCalendarAlt },
    { label: "Time Frame", value: project.time, icon: IoTimerSharp },
  ];

  return (
    <section className="project-details container">
      <h2 className="heading">Project Overview</h2>
      <div className="project-content">
        <div className="left-card">
          {detailsMap.map(({ label, value, icon: Icon }, index) => (
            <div key={index} className="info-card">
              <Icon className="card-icon" />
              <div className="info-block">
                <h3>{label}</h3>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="right-images">
          {project.imgList?.map((img, index) => (
            <img key={index} src={img} alt={`Project ${index + 1}`} className="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  )
};

export default ProjectDetails;