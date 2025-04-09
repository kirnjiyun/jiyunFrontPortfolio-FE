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

// Skeleton UI 스타일 컴포넌트
const SkeletonCard = styled.div`
    width: 100%;
    max-width: 400px;
    height: 350px;
    background: #e0e0e0;
    border-radius: 12px;
    animation: pulse 1.5s infinite ease-in-out;
    margin: 0 auto;

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

    @media (max-width: 576px) {
        max-width: 300px;
        height: 300px;
    }
`;

const SkeletonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 16px;
    margin: 0 100px;
    padding: 1rem;
    justify-items: center;

    @media (max-width: 1220px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin: 0 50px;
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin: 0 30px;
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        margin: 0 15px;
        gap: 12px;
    }
`;

export default function ProjectsPage({ initialProjects }) {
    const {
        data: projectsData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        initialData: initialProjects,
    });

    const [filteredProjects, setFilteredProjects] = useState(
        projectsData || []
    );
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
            filtered = filtered.filter((project) => project.isMajor === true);
        }

        if (filterOptions.category) {
            filtered = filtered.filter(
                (project) =>
                    project.category &&
                    project.category.trim().toLowerCase() ===
                        filterOptions.category.trim().toLowerCase()
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

    // 마우스 커서 위치 관련 상태 및 핸들러
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // 스크롤 방향 감지 관련 상태 및 로직
    const [scrollDir, setScrollDir] = useState("down");
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY) {
                setScrollDir("down");
            } else if (currentScrollY < prevScrollY) {
                setScrollDir("up");
            }
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

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
                        src={
                            scrollDir === "down"
                                ? "/images/down-arrow.png"
                                : "/images/up-arrow.png"
                        }
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
                    renderSkeleton()
                ) : error ? (
                    <p>Error loading projects: {error.message}</p>
                ) : filteredProjects.length > 0 ? (
                    <TransitionGroup component={null}>
                        {filteredProjects.map((project) => (
                            <CSSTransition
                                key={project.id}
                                classNames="project"
                                timeout={200}
                            >
                                <ProjectContainer projectsData={[project]} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                ) : (
                    <p>필터링된 프로젝트가 없습니다.</p>
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
