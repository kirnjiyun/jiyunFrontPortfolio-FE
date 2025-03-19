import React from "react";
import Link from "next/link";

import {
    ProjectCardContainer,
    ProjectImage,
    ProjectDetails,
    ProjectTitle,
    ProjectDescription,
    TechStackContainer,
    TechStackTag,
} from "../../styles/projects/ProjectCard.styles";

const ProjectCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            <Link
                href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
            >
                <ProjectImage
                    src={
                        project.thumbnail
                            ? project.thumbnail
                            : "/images/default-image.webp"
                    }
                    alt={project.name}
                    loading="lazy"
                />
                <ProjectDetails>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDescription>
                        {project.description}
                    </ProjectDescription>
                </ProjectDetails>
                <TechStackContainer>
                    {project.techStack?.map((tech, index) => (
                        <TechStackTag key={index}>{tech}</TechStackTag>
                    ))}
                </TechStackContainer>
            </Link>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
