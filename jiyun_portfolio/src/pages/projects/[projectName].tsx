import React from "react";
import {
    Container,
    Title,
    Info,
    StyledLink,
    Features,
    Screenshots,
    ScreenshotTitle,
    HeroSection,
} from "@/styles/projects/ProjectDetails.styles";
import {
    TechStackContainer,
    TechBadge,
} from "@/styles/projects/TechStack.styles";
import ScreenshotGallery from "../../components/projectsCompo/ScreenshotGallery";

const colorMapping = {
    JavaScript: "var(--color-dark-blue)",
    TypeScript: "var(--color-medium-blue)",
    React: "var(--color-light-blue)",
    "styled-components": "var(--color-lightest-blue)",
    Axios: "var(--color-brightest-blue)",
    "React Router": "var(--color-medium-blue)",
    Bootstrap: "var(--color-lightest-blue)",
    "React Multi Carousel": "var(--color-brightest-blue)",
    "React YouTube": "var(--color-light-blue)",
};

const ProjectDetails = ({ project }) => {
    console.log("Fff", project);
    return (
        <>
            <HeroSection>
                <Title>{project.name} 프로젝트</Title>
            </HeroSection>

            <Container>
                <Screenshots>
                    <ScreenshotTitle>스크린샷</ScreenshotTitle>
                    {project.screenshots && (
                        <ScreenshotGallery screenshots={project.screenshots} />
                    )}
                </Screenshots>

                <Info>
                    <strong>카테고리:</strong> {project.category}
                </Info>
                <Info>
                    <strong>설명:</strong> {project.description}
                </Info>
                <Info>
                    <strong>역할:</strong> {project.role}
                </Info>

                <Info>
                    <strong>기술 스택:</strong>
                    <TechStackContainer>
                        {project.techStack.map((tech, index) => (
                            <TechBadge key={index} color={colorMapping[tech]}>
                                {tech}
                            </TechBadge>
                        ))}
                    </TechStackContainer>
                </Info>

                <Info>
                    <strong>배포 링크:</strong>{" "}
                    <StyledLink
                        href={project.projectLinks.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.projectLinks.deployment}
                    </StyledLink>
                </Info>
                <Info>
                    <strong>GitHub 링크:</strong>{" "}
                    <StyledLink
                        href={project.projectLinks.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.projectLinks.repository}
                    </StyledLink>
                </Info>

                <Features>
                    <strong>주요 기능:</strong>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </Features>
            </Container>
        </>
    );
};

export default ProjectDetails;
