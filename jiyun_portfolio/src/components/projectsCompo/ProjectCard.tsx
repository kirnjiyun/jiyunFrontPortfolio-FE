import React from "react";
import Link from "next/link";

import {
    ProjectCardContainer,
    ProjectImage,
    ProjectDetails,
    ProjectTitle,
    ProjectDescription,
} from "../../styles/projects/ProjectCard.styles";

const ProjectCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            {" "}
            <Link
                href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
            >
                {" "}
                <div className="mac-window-bar">
                    <div className="dot red" />
                    <div className="dot yellow" />
                    <div className="dot green" />
                </div>
                <ProjectImage
                    src={
                        project.thumbnail
                            ? project.thumbnail
                            : "/images/default-image.webp"
                    }
                    alt={project.name}
                />
                <ProjectDetails>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDescription>
                        {project.description}
                    </ProjectDescription>
                </ProjectDetails>
            </Link>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
