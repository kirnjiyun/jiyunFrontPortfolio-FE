import React from "react";
import Link from "next/link";

import {
    ProjectCardContainer,
    ProjectImage,
    ProjectDetails,
    ProjectTitle,
    ProjectDescription,
    ProjectMeta,
} from "../../styles/projects/ProjectCard.styles";

const ProjectCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            <Link
                href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
            >
                {/* 썸네일은 백엔드에서 내려오는 외부 URL 일 수 있어 next/image 를
                    바로 적용하지 않았다. 대신 크기를 명시해 CLS 를 막는다. */}
                <ProjectImage
                    src={
                        project.thumbnail
                            ? project.thumbnail
                            : "/images/default-image.webp"
                    }
                    alt={project.name}
                    width={400}
                    height={210}
                    loading="lazy"
                    decoding="async"
                />
                <ProjectDetails>
                    <ProjectMeta>{project.category || "PROJECT"}</ProjectMeta>
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
