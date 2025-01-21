import React, { useState, useEffect } from "react";
import { HeroSection, Title } from "@/styles/about/AboutPageStyles";
import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";
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
export async function getStaticProps() {
    const baseUrl = "http://localhost:4000"; // json-server 주소
    const res = await fetch(`${baseUrl}/projectsData`);

    if (!res.ok) {
        throw new Error("Failed to fetch projectsData");
    }

    const projectsData = await res.json();

    return {
        props: {
            projectsData,
        },
    };
}

export default function ProjectsPage({ projectsData }) {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [filterOptions, setFilterOptions] = useState({
        isMajor: false, // true: 중요한 프로젝트만 필터링
        category: "", // "개인", "팀" 또는 빈 문자열 (전체 보기)
    });

    const categoryOptions = [
        { value: "", label: "전체" },
        { value: "개인", label: "개인" },
        { value: "팀", label: "팀" },
    ];
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

    // 필터 UI 변경 핸들러
    const handleFilterChange = (key, value) => {
        setFilterOptions((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // 화살표 위치 및 상태 관리
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // JSX 반환
    return (
        <>
            <HeroSection>
                <Title>Projects</Title>
            </HeroSection>

            <ScrollSection
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {/* 마우스가 ScrollSection 위에 있을 때만 화살표 이미지 표시 */}
                {isHovering && (
                    <img
                        src="/images/down-arrow.png"
                        alt="arrow"
                        style={{
                            position: "fixed",
                            top: mousePos.y + 10,
                            left: mousePos.x + 10,
                            width: "100px",
                            pointerEvents: "none",
                            transform: "translate(-50%, -50%)",
                            zIndex: 9999,
                        }}
                    />
                )}

                {/* ScrollTriggered 컴포넌트 */}
                <ScrollTriggered />
            </ScrollSection>

            {/* 필터 컨테이너 */}
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

            {/* 프로젝트 리스트 */}
            <ProjectTransitionStyles>
                {filteredProjects.map((project) => (
                    <ProjectContainer
                        key={project.id}
                        projectsData={[project]}
                    />
                ))}
            </ProjectTransitionStyles>
        </>
    );
}
