import ProjectSlideTemplate from "../../Components/ProjectSlideTemplate";
import projects from "../../const/projects";
import '../../styles/pages.scss';

const ProjectPage = () => {
  return (
    <div className="router-page projectPage">
      <h1 className="subtitle">Projects</h1>
      <ProjectSlideTemplate project={projects}/>
    </div>
  );
};

export default ProjectPage;