import React from "react";
import {
    Container,
    Title,
    Info,
    StyledLink,
    Features,
    Screenshots,
    Screenshot,
    FeatureItem,
    ScreenshotTitle,
    Gallery,
    HeroSection,
} from "@/styles/projects/ProjectDetails.styles";
import ScreenshotGallery from "../../components/projectsCompo/ScreenshotGallery";
export async function getStaticPaths() {
    const baseUrl = "http://localhost:4000/projectsData"; // JSON 서버 주소
    const res = await fetch(baseUrl);
    const projects = await res.json();

    const paths = projects.map((project) => ({
        params: { projectName: project.name.toLowerCase() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const baseUrl = "http://localhost:4000/projectsData"; // JSON 서버 주소
    const res = await fetch(baseUrl);
    const projects = await res.json();

    const project = projects.find(
        (proj) => proj.name.toLowerCase() === params.projectName.toLowerCase()
    );

    if (!project) {
        return { notFound: true };
    }

    return {
        props: { project },
    };
}

const ProjectDetails = ({ project }) => {
    return (
        <>
            <HeroSection>
                <Title>{project.name} 프로젝트</Title>
            </HeroSection>

            <Container>
                {project.screenshots && project.screenshots.length > 0 && (
                    <Screenshots>
                        <ScreenshotTitle>스크린샷</ScreenshotTitle>
                        {project.screenshots &&
                            project.screenshots.length > 0 && (
                                <ScreenshotGallery
                                    screenshots={project.screenshots}
                                />
                            )}
                    </Screenshots>
                )}
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
                    <strong>기술 스택:</strong> {project.techStack.join(", ")}
                </Info>
                <Info>
                    <strong>링크:</strong>{" "}
                    <StyledLink
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.link}
                    </StyledLink>
                </Info>
                <Features>
                    <strong>주요 기능:</strong>
                    <ul>
                        {project.features.map((feature, index) => (
                            <FeatureItem key={index}>{feature}</FeatureItem>
                        ))}
                    </ul>
                </Features>
            </Container>
        </>
    );
};

export default ProjectDetails;
