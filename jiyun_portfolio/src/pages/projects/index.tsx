import React, { useState, useEffect } from "react";
import { HeroSection, Title } from "@/styles/about/AboutPageStyles";
import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    margin: 1.5rem 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FilterLabel = styled.label`
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #333;
`;

const FilterSelect = styled.select`
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    color: #555;
    background-color: #fff;
    transition: border-color 0.3s;

    &:hover {
        border-color: #aaa;
    }

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const FilterCheckbox = styled.input`
    accent-color: #007bff;
    width: 18px;
    height: 18px;
    cursor: pointer;
`;

const ProjectTransitionStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    justify-content: center;

    .project-enter {
        opacity: 0;
        transform: translateY(10px);
    }
    .project-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms, transform 300ms;
    }
    .project-exit {
        opacity: 1;
        transform: translateY(0);
    }
    .project-exit-active {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 300ms, transform 300ms;
    }
`;

export default function ProjectsPage({ projectsData }) {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [filterOptions, setFilterOptions] = useState({
        isMajor: false, // true: 중요한 프로젝트만 필터링
        category: "", // "개인", "팀" 또는 빈 문자열 (전체 보기)
    });

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

    return (
        <>
            <HeroSection>
                <Title>Projects</Title>
            </HeroSection>

            <ProjectCarousel />
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
                    onChange={(e) =>
                        handleFilterChange("category", e.target.value)
                    }
                >
                    <option value="">전체</option>
                    <option value="개인">개인</option>
                    <option value="팀">팀</option>
                </FilterSelect>
            </FilterContainer>

            <ProjectTransitionStyles>
                <TransitionGroup>
                    {filteredProjects.map((project) => (
                        <CSSTransition
                            key={project.id}
                            timeout={300}
                            classNames="project"
                        >
                            <ProjectContainer projectsData={[project]} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ProjectTransitionStyles>
        </>
    );
}
