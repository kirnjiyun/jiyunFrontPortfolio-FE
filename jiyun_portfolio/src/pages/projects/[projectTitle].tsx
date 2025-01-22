// pages/projects/[projectTitle].js
import React from "react";
import { useRouter } from "next/router";
import {
    PageContainer,
    BackButton,
    FeaturesSubtitle,
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
import Gallery from "@/components/projectsCompo/Gallery";

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
                    <ProjectTitle>{project.name}</ProjectTitle>
                </ProjectHeader>
                <Gallery />
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
                            <InfoValue>{project.role}</InfoValue>
                        </InfoGroup>

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
                            </FeaturesCard>
                        )}

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
