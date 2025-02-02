import React, { useState, useEffect } from "react";
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

export async function getStaticProps() {
    const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5050";

    const res = await fetch(`${baseUrl}/api/projects`);
    const projectsData = await res.json();

    return {
        props: { projectsData },
    };
}

export default function ProjectsPage({ projectsData }) {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
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
