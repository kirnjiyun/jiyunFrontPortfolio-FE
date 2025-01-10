import React from "react";
import { useRouter } from "next/router";
import {
    ProjectCardContainer,
    ProjectImage,
    ProjectDetails,
} from "../../styles/projects/ProjectCard.styles";

const ProjectCard = ({ project }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/projects/${project.name.toLowerCase()}`); // 프로젝트 이름을 경로로 사용
    };

    return (
        <ProjectCardContainer onClick={handleCardClick}>
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
                    <strong>기술 스택:</strong> {project.techStack.join(", ")}
                </p>
                <p>
                    <strong>기간:</strong> {project.duration}
                </p>
            </ProjectDetails>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
