import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import MultiCarouselGallery from "@/components/projectsCompo/MultiCarouselGallery";
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
    SkeletonTitle,
    SkeletonText,
    SkeletonButton,
} from "../../styles/projects/projectTitle.styles";

Modal.setAppElement("#__next");

// 로딩 중에 보여줄 스켈레톤 컴포넌트 (필요 시 유지 가능, 여기서는 제거 가능성도 고려)
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

    // project가 getStaticProps를 통해 전달되므로 useQuery 및 로딩/에러 상태 제거
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
                                            <FeaturesTitle>
                                                Team Features
                                            </FeaturesTitle>
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
                                            <FeaturesTitle>
                                                Individual Features
                                            </FeaturesTitle>
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

// 모든 프로젝트 페이지의 경로를 생성
export async function getStaticPaths() {
    const projects = await fetchProjects();
    const paths = projects.map((project) => ({
        params: {
            projectTitle: project.title.toLowerCase().replace(/\s+/g, "-"),
        },
    }));
    return {
        paths,
        fallback: false, // 존재하지 않는 경로는 404로 처리
    };
}

// 각 프로젝트 데이터를 빌드 시 가져옴
export async function getStaticProps({ params }) {
    const projects = await fetchProjects();
    const project = projects.find(
        (proj) =>
            proj.title.toLowerCase().replace(/\s+/g, "-") ===
            params.projectTitle
    );
    if (!project) {
        return { notFound: true }; // 프로젝트가 없으면 404 페이지 표시
    }
    return {
        props: { project }, // 프로젝트 데이터를 페이지에 전달
    };
}
