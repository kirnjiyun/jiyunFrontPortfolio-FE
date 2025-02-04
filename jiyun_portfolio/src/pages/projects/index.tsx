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

export default function ProjectsPage() {
    const [projectsData, setProjectsData] = useState([]); // 초기 데이터 빈 배열로 설정
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        isMajor: false,
        category: "",
    });
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    const categoryOptions = [
        { value: "", label: "전체" },
        { value: "개인", label: "개인" },
        { value: "팀", label: "팀" },
    ];

    // 클라이언트에서 데이터 가져오기
    useEffect(() => {
        const fetchProjects = async () => {
            const baseUrl =
                process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5050";

            try {
                const res = await fetch(`${baseUrl}/api/projects`);

                if (!res.ok) {
                    throw new Error(`API 호출 실패: ${res.status}`);
                }

                const data = await res.json();
                setProjectsData(data);
                setFilteredProjects(data); // 초기 필터링 데이터 설정
            } catch (error) {
                console.error("❌ API 호출 중 오류 발생:", error);
                setProjectsData([]); // API 호출 실패 시 빈 배열 설정
            } finally {
                setLoading(false); // 로딩 종료
            }
        };

        fetchProjects();
    }, []);

    // 필터링 로직
    useEffect(() => {
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

    // 마우스 오버 효과
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // 로딩 중 표시
    if (loading) {
        return <p>Loading projects...</p>;
    }

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
            </ProjectTransitionStyles>
        </>
    );
}
