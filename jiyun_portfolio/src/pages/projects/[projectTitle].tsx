import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Fancy16to9Gallery from "@/components/projectsCompo/FancyImgGallery";
Modal.setAppElement("#__next");
import {
    PageContainer,
    BackButton,
    FeaturesSubtitle,
    ArrowSymbol,
    ContentWrapper,
    ProjectHeader,
    ProjectTitle,
    ProjectSubtitle,
    ThumbnailImage,
    ThumbnailWrapper,
    InfoSection,
    LeftColumn,
    RightColumn,
    Description,
    InfoGroup,
    InfoLabel,
    InfoValue,
    BadgesWrapper,
    TechBadge,
    FeaturesCard,
    FeaturesTitle,
    FeaturesList,
    FeatureItem,
    LinkCard,
    LinkRow,
    LinksTitle,
    LinkLabel,
    LinkAnchor,
    ScreenshotButton, // 추가
} from "../../styles/projects/projectTitle.styles";

export async function getServerSideProps({ params }) {
    const slug = params.projectTitle;
    const baseUrl = "http://localhost:4000";
    const res = await fetch(`${baseUrl}/projectsData`);
    const allProjects = await res.json();

    const foundProject = allProjects.find(
        (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!foundProject) {
        return { notFound: true };
    }

    return {
        props: {
            project: foundProject,
        },
    };
}

export default function ProjectDetailPage({ project }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 이미지 변경 함수
    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
        );
    };

    return (
        <PageContainer>
            <ContentWrapper>
                <BackButton onClick={() => router.back()}>
                    <ArrowSymbol>←</ArrowSymbol>
                </BackButton>

                <ProjectHeader>
                    <ProjectTitle>{project.name}</ProjectTitle>

                    {project.thumbnail && (
                        <ThumbnailWrapper>
                            <ThumbnailImage
                                src={project.thumbnail}
                                alt={`${project.name} thumbnail`}
                            />
                        </ThumbnailWrapper>
                    )}
                </ProjectHeader>

                <InfoSection>
                    <LeftColumn>
                        <Description>{project.description}</Description>
                        <InfoGroup>
                            <ProjectSubtitle>
                                {project.category} 프로젝트
                            </ProjectSubtitle>
                        </InfoGroup>
                        <InfoGroup>
                            <InfoLabel>기간</InfoLabel>
                            <InfoValue>{project.duration}</InfoValue>
                        </InfoGroup>
                        <InfoGroup>
                            <InfoLabel>역할</InfoLabel>
                            <div>
                                {project.role.map((r, idx) => (
                                    <InfoValue key={idx}>{r}</InfoValue>
                                ))}
                            </div>
                        </InfoGroup>
                        {project.techStack && project.techStack.length > 0 && (
                            <InfoGroup>
                                <InfoLabel>기술스택</InfoLabel>
                                <BadgesWrapper>
                                    {project.techStack.map((stack, idx) => (
                                        <TechBadge key={idx}>{stack}</TechBadge>
                                    ))}
                                </BadgesWrapper>
                            </InfoGroup>
                        )}
                        {project.projectLinks && (
                            <LinkCard>
                                <LinksTitle>관련 링크</LinksTitle>{" "}
                                {project.projectLinks.repository &&
                                    project.projectLinks.repository.map(
                                        (repo, idx) => (
                                            <LinkRow key={idx}>
                                                <LinkLabel>깃허브</LinkLabel>
                                                <LinkAnchor
                                                    href={repo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {repo}
                                                </LinkAnchor>
                                            </LinkRow>
                                        )
                                    )}
                                {project.projectLinks.deployment && (
                                    <LinkRow>
                                        <LinkLabel>배포</LinkLabel>
                                        <LinkAnchor
                                            href={
                                                project.projectLinks.deployment
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {project.projectLinks.deployment}
                                        </LinkAnchor>
                                    </LinkRow>
                                )}
                            </LinkCard>
                        )}
                    </LeftColumn>

                    <RightColumn>
                        {project.features && (
                            <FeaturesCard>
                                <FeaturesTitle>주요 기능</FeaturesTitle>
                                {project.features.team &&
                                    project.features.team.length > 0 && (
                                        <>
                                            <FeaturesSubtitle>
                                                Team Features
                                            </FeaturesSubtitle>
                                            <FeaturesList>
                                                {project.features.team.map(
                                                    (feature, idx) => (
                                                        <FeatureItem key={idx}>
                                                            • {feature}
                                                        </FeatureItem>
                                                    )
                                                )}
                                            </FeaturesList>
                                        </>
                                    )}
                                {project.features.individual &&
                                    project.features.individual.length > 0 && (
                                        <>
                                            <FeaturesSubtitle>
                                                Individual Features
                                            </FeaturesSubtitle>
                                            <FeaturesList>
                                                {project.features.individual.map(
                                                    (feature, idx) => (
                                                        <FeatureItem key={idx}>
                                                            • {feature}
                                                        </FeatureItem>
                                                    )
                                                )}
                                            </FeaturesList>
                                        </>
                                    )}
                                {!project.features.team &&
                                    !project.features.individual &&
                                    project.features.length > 0 && (
                                        <FeaturesList>
                                            {project.features.map(
                                                (feature, idx) => (
                                                    <FeatureItem key={idx}>
                                                        • {feature}
                                                    </FeatureItem>
                                                )
                                            )}
                                        </FeaturesList>
                                    )}

                                {/* "스크린샷 보기" 버튼 추가 */}
                                {project.screenshots &&
                                    project.screenshots.length > 0 && (
                                        <ScreenshotButton
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            스크린샷 보기
                                        </ScreenshotButton>
                                    )}
                            </FeaturesCard>
                        )}
                    </RightColumn>
                </InfoSection>
            </ContentWrapper>

            {/* 스크린샷 모달 */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="스크린샷 갤러리"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        zIndex: 1000,
                    },
                    content: {
                        maxWidth: "1200px",
                        height: "fit-content",
                        margin: "auto",
                        borderRadius: "12px",
                        textAlign: "center",
                    },
                }}
            >
                <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                        all: "unset",
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        color: "var(--color-dark-blue)",
                        cursor: "pointer",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    X
                </button>
                <Fancy16to9Gallery images={project.screenshots} />
            </Modal>
        </PageContainer>
    );
}
