import { ProjectsContainer } from "@/styles/projects/ProjectContainer.styles";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({ projectsData }) => (
    <ProjectsContainer>
        {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
        ))}
    </ProjectsContainer>
);
export default ProjectContainer;
