import React from "react";
import { ProjectsContainer } from "../../styles/projects/ProjectContainer.styles";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({ projectsData }) => {
    return (
        <ProjectsContainer>
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </ProjectsContainer>
    );
};

export default ProjectContainer;
