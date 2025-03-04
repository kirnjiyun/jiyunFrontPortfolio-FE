import React, { useState, useEffect } from "react";
import Head from "next/head";
import { HeroSection, Title } from "@/styles/about/AboutPageStyles";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";
import {
    ScrollSection,
    FilterContainer,
    FilterLabel,
    FilterCheckbox,
    ProjectTransitionStyles,
} from "@/styles/projects/ProjectIndex.styles";
import ScrollTriggered from "@/components/projectsCompo/ScrollTrigger";
import FilterSelect from "@/components/projectsCompo/FilterSelect";
import Image from "next/image";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/lib/api";
import styled from "styled-components";
import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";

// Skeleton UI 스타일 컴포넌트
const SkeletonCard = styled.div`
    width: 100%;
    height: 300px; // ProjectContainer의 예상 높이에 맞게 조정
    background: #e0e0e0;
    border-radius: 8px;
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% {
            background-color: #e0e0e0;
        }
        50% {
            background-color: #f0f0f0;
        }
        100% {
            background-color: #e0e0e0;
        }
    }
`;

const SkeletonWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(
        auto-fill,
        minmax(300px, 1fr)
    ); // ProjectContainer 레이아웃에 맞게
`;

export default function ProjectsPage({ initialProjects }) {
    const {
        data: projectsData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        initialData: initialProjects, // getStaticProps에서 받은 초기 데이터
    });
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        isMajor: false,
        category: "",
    });

    const categoryOptions = [
        { value: "", label: "전체" },
        { value: "개인", label: "개인" },
        { value: "팀", label: "팀" },
    ];

    useEffect(() => {
        if (!projectsData) return;

        let filtered = projectsData;

        if (filterOptions.isMajor) {
            filtered = filtered.filter((project) => project.isMajor);
        }

        if (filterOptions.category) {
            filtered = filtered.filter(
                (project) => project.category === filterOptions.category
            );
        }

        setFilteredProjects(filtered);
    }, [filterOptions, projectsData]);

    const handleFilterChange = (key, value) => {
        setFilterOptions((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const renderSkeleton = () => (
        <SkeletonWrapper>
            {Array(6)
                .fill(3)
                .map((_, idx) => (
                    <SkeletonCard key={idx} />
                ))}
        </SkeletonWrapper>
    );

    return (
        <>
            <Head>
                <title>Projects | 김지윤 포트폴리오</title>
                <meta
                    name="description"
                    content="프론트엔드 개발자 김지윤의 프로젝트 모음입니다. 다양한 개인 및 팀 프로젝트를 확인하세요."
                />
                <meta
                    name="keywords"
                    content="프론트엔드 프로젝트, 팀 프로젝트, 개인 프로젝트, 포트폴리오"
                />
                <meta name="author" content="김지윤" />
            </Head>

            <HeroSection>
                <Title>Projects</Title>
            </HeroSection>
            <ScrollSection
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {isHovering && (
                    <Image
                        src="/images/down-arrow.png"
                        alt="arrow"
                        width={100}
                        height={100}
                        style={{
                            position: "fixed",
                            top: mousePos.y + 10,
                            left: mousePos.x + 10,
                            pointerEvents: "none",
                            transform: "translate(-50%, -50%)",
                            zIndex: 9999,
                        }}
                    />
                )}
                <ScrollTriggered />
            </ScrollSection>
            <FilterContainer>
                <FilterLabel>
                    <FilterCheckbox
                        type="checkbox"
                        checked={filterOptions.isMajor}
                        onChange={(e) =>
                            handleFilterChange("isMajor", e.target.checked)
                        }
                    />
                    중요한 프로젝트만
                </FilterLabel>

                <FilterSelect
                    value={filterOptions.category}
                    options={categoryOptions}
                    onChange={(value) => handleFilterChange("category", value)}
                />
            </FilterContainer>
            <ProjectTransitionStyles>
                {isLoading ? (
                    renderSkeleton() // 로딩 중일 때 Skeleton UI
                ) : error ? (
                    <p>Error loading projects: {error.message}</p>
                ) : (
                    <TransitionGroup component={null}>
                        {filteredProjects && filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <CSSTransition
                                    key={project.id}
                                    classNames="project"
                                    timeout={200}
                                >
                                    <ProjectContainer
                                        projectsData={[project]}
                                    />
                                </CSSTransition>
                            ))
                        ) : (
                            <p></p>
                        )}
                    </TransitionGroup>
                )}
            </ProjectTransitionStyles>
        </>
    );
}
export async function getStaticProps() {
    const projectsData = await fetchProjects();
    return {
        props: { initialProjects: projectsData },
    };
}
