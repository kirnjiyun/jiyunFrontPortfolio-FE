import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { animated, useSpring, useTrail } from "react-spring";
import MultiCarouselGallery from "@/components/projectsCompo/MultiCarouselGallery";
import { fetchProjectsForSSG, SSG_REVALIDATE_SECONDS } from "@/lib/api";
import {
    PageContainer,
    BackButton,
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
    ScreenshotButton,
    SkeletonTitle,
    SkeletonText,
    SkeletonButton,
} from "../../styles/projects/projectTitle.styles";

Modal.setAppElement("#__next");

function ProjectDetailSkeleton() {
    return (
        <PageContainer>
            <ContentWrapper>
                <BackButton disabled>
                    <ArrowSymbol>←</ArrowSymbol>
                </BackButton>
                <ProjectHeader>
                    <SkeletonTitle />
                    <ThumbnailWrapper></ThumbnailWrapper>
                </ProjectHeader>
                <InfoSection>
                    <LeftColumn>
                        <SkeletonText style={{ marginBottom: "1rem" }} />
                        <SkeletonText />
                        <SkeletonText style={{ width: "50%" }} />
                    </LeftColumn>
                    <RightColumn>
                        <FeaturesTitle>주요 기능</FeaturesTitle>
                        <SkeletonText />
                        <SkeletonText />
                        <SkeletonButton style={{ marginTop: "1rem" }} />
                    </RightColumn>
                </InfoSection>
            </ContentWrapper>
        </PageContainer>
    );
}

export default function ProjectDetailPage({ project }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);
    const contentSpring = useSpring({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { tension: 220, friction: 22 },
    });

    const normalizedFeatures = Array.isArray(project?.features)
        ? project.features
        : [
              ...(project?.features?.team || []).map(
                  (feature) => `[Team] ${feature}`
              ),
              ...(project?.features?.individual || []).map(
                  (feature) => `[Individual] ${feature}`
              ),
          ];

    const featureTrail = useTrail(normalizedFeatures.length, {
        from: { opacity: 0, transform: "translateY(8px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { tension: 240, friction: 20 },
    });

    if (!project) {
        return (
            <PageContainer>
                <ContentWrapper>
                    <p>Project not found</p>
                </ContentWrapper>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <animated.div style={contentSpring}>
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
                                loading="lazy"
                                style={{
                                    display: isImageLoading ? "none" : "block",
                                }}
                                onLoad={() => setIsImageLoading(false)}
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
                                <LinksTitle>관련 링크</LinksTitle>
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
                        {normalizedFeatures.length > 0 && (
                            <FeaturesCard>
                                <FeaturesTitle>주요 기능</FeaturesTitle>
                                <FeaturesList>
                                    {featureTrail.map((trailStyle, idx) => (
                                        <animated.div
                                            key={`${normalizedFeatures[idx]}-${idx}`}
                                            style={trailStyle}
                                        >
                                            <FeatureItem>
                                                • {normalizedFeatures[idx]}
                                            </FeatureItem>
                                        </animated.div>
                                    ))}
                                </FeaturesList>
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
            </animated.div>

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
                <MultiCarouselGallery images={project.screenshots} />
            </Modal>
        </PageContainer>
    );
}

export async function getStaticPaths() {
    const projects = await fetchProjectsForSSG();
    const paths = projects.map((project) => ({
        params: {
            projectTitle: project.title.toLowerCase().replace(/\s+/g, "-"),
        },
    }));
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    const projects = await fetchProjectsForSSG();
    const project = projects.find(
        (proj) =>
            proj.title.toLowerCase().replace(/\s+/g, "-") ===
            params.projectTitle
    );
    if (!project) {
        return { notFound: true, revalidate: SSG_REVALIDATE_SECONDS };
    }
    return {
        props: { project },
        revalidate: SSG_REVALIDATE_SECONDS,
    };
}
