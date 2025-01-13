// pages/projects/[projectTitle].js
import React from "react";
import { useRouter } from "next/router";
import {
    PageContainer,
    BackButton,
    ArrowSymbol,
    ContentWrapper,
    ProjectHeader,
    ProjectTitle,
    ProjectSubtitle,
    GallerySection,
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
} from "../../styles/projects/projectTitle.styles";
import Fancy16to9Gallery from "@/components/projectsCompo/FancyImgGallery";

// async function getStaticPaths() {
//     // 예시: json-server에서 프로젝트 목록을 가져온다고 가정
//     const baseUrl = "http://localhost:4000";
//     const res = await fetch(`${baseUrl}/projectsData`);
//     const allProjects = await res.json();

//     // 2. 각 프로젝트의 title을 slug로 변환
//     const paths = allProjects.map((project) => ({
//         params: {
//             projectTitle: project.title.toLowerCase().replace(/\s+/g, "-"),
//         },
//     }));

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const slug = params.projectTitle;
//     const baseUrl = "http://localhost:4000";
//     const res = await fetch(`${baseUrl}/projectsData`);
//     const allProjects = await res.json();

//     const foundProject = allProjects.find(
//         (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === slug
//     );

//     if (!foundProject) {
//         return { notFound: true };
//     }

//     return {
//         props: {
//             project: foundProject,
//         },
//     };
// }

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

    return (
        <PageContainer>
            <ContentWrapper>
                <BackButton onClick={() => router.back()}>
                    <ArrowSymbol>←</ArrowSymbol>
                </BackButton>
                <ProjectHeader>
                    {/* 좀 더 크게 / 스타일리시한 프로젝트 타이틀 */}
                    <ProjectTitle>{project.name}</ProjectTitle>
                </ProjectHeader>
                {/* 이미지는 상단에 크게 노출 (사용자 지정 FancyImageGallery) */}
                <GallerySection>
                    <Fancy16to9Gallery images={project.screenshots} />
                </GallerySection>
                {/* 2컬럼 레이아웃으로 프로젝트 상세 정보 */}
                <InfoSection>
                    {/* 왼쪽 컬럼 */}
                    <LeftColumn>
                        <Description>{project.description}</Description>

                        <InfoGroup>
                            {" "}
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
                            <InfoValue>{project.role}</InfoValue>
                        </InfoGroup>

                        {/* 테크스택 - 뱃지 */}
                        {project.techStack && project.techStack.length > 0 && (
                            <InfoGroup>
                                <InfoLabel>Tech Stack</InfoLabel>
                                <BadgesWrapper>
                                    {project.techStack.map((stack, idx) => (
                                        <TechBadge key={idx}>{stack}</TechBadge>
                                    ))}
                                </BadgesWrapper>
                            </InfoGroup>
                        )}
                    </LeftColumn>

                    {/* 오른쪽 컬럼 */}
                    <RightColumn>
                        {/* 주요 기능 */}
                        {project.features && project.features.length > 0 && (
                            <FeaturesCard>
                                <FeaturesTitle>주요 기능</FeaturesTitle>
                                <FeaturesList>
                                    {project.features.map((feature, idx) => (
                                        <FeatureItem key={idx}>
                                            • {feature}
                                        </FeatureItem>
                                    ))}
                                </FeaturesList>
                            </FeaturesCard>
                        )}

                        {/* 링크 */}
                        {project.projectLinks && (
                            <LinkCard>
                                <LinksTitle>관련 링크</LinksTitle>
                                {project.projectLinks.deployment && (
                                    <LinkRow>
                                        <LinkLabel>배포 링크</LinkLabel>
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
                                {project.projectLinks.repository && (
                                    <LinkRow>
                                        <LinkLabel>GitHub</LinkLabel>
                                        <LinkAnchor
                                            href={
                                                project.projectLinks.repository
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {project.projectLinks.repository}
                                        </LinkAnchor>
                                    </LinkRow>
                                )}
                            </LinkCard>
                        )}
                    </RightColumn>
                </InfoSection>
            </ContentWrapper>
        </PageContainer>
    );
}
