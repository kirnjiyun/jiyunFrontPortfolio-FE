import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import MultiCarouselGallery from "@/components/projectsCompo/MultiCarouselGallery";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/lib/api";
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
    // Skeleton 컴포넌트들 (named export)
    SkeletonTitle,
    SkeletonText,
    SkeletonButton,
} from "../../styles/projects/projectTitle.styles";

Modal.setAppElement("#__next");

// 로딩 중에 보여줄 스켈레톤 컴포넌트
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

export default function ProjectDetailPage() {
    const router = useRouter();
    const { projectTitle } = router.query;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    // suspense 옵션 없이 데이터를 가져옴
    const {
        data: allProjects,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });

    if (error) return <p>Error: {error.message}</p>;

    // 데이터가 로딩 중이면 스켈레톤 UI를 보여줌
    if (isLoading) return <ProjectDetailSkeleton />;

    const project = allProjects.find(
        (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === projectTitle
    );

    if (!project) return <p>Project not found</p>;

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
