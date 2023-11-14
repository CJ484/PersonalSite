/** @jsxImportSource theme-ui */
import web_chain from "../../assets/symbols/web-link.svg";
import "../../styles/projectSlides.scss";

const ProjectSlideTemplate = ({ project }) => {
  return Object.values(project).map((project) => (
    <div className="project-slide">
      <div className="p-s-image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="p-s-content">
        <h3 className="p-s-title">{project.name}</h3>
        <p className="ps-description">{project.description}</p>
        <a
          sx={{ color: 'grey'}}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-s-link"
        >
          View Project
          <img src={web_chain} alt="link" />
        </a>
      </div>
    </div>
  ));
};

export default ProjectSlideTemplate;
