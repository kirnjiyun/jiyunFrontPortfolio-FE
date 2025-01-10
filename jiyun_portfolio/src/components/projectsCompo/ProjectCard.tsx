import React from "react";

import {
    ProjectCardContainer,
    ProjectImage,
    ProjectDetails,
} from "../../styles/projects/ProjectCard.styles";
import Link from "next/link";
const ProjectCard = ({ project }) => {
    const handleCardClick = () => {
        console.log(
            "Navigating to:",
            `/projects/${project.name.toLowerCase()}`
        );
        console.log("zzz", project.name);
        console.log("zzz", project);
    };

    return (
        <ProjectCardContainer onClick={handleCardClick}>
            {" "}
            <Link href={`/projects/${project.title}`}>
                <ProjectImage
                    src={
                        project.screenshots && project.screenshots.length > 0
                            ? project.screenshots[0] // 첫 번째 스크린샷 사용
                            : "/images/default-image.webp" // 기본 이미지 경로
                    }
                    alt={project.name}
                />
                <ProjectDetails>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p>
                        <strong>기술 스택:</strong>{" "}
                        {project.techStack.join(", ")}
                    </p>
                    <p>
                        <strong>기간:</strong> {project.duration}
                    </p>
                </ProjectDetails>{" "}
            </Link>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
