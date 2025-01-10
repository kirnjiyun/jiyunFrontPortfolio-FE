import React, { useRef } from "react";
import {
    ProjectsContainer,
    ProjectCard,
    ProjectImage,
    ProjectDetails,
} from "../../styles/projects/ProjectContainer.styles";

const projects = [
    {
        id: 1,
        name: "Feel My Rhythm",
        description: "유저가 음악을 통해 감정을 표현할 수 있는 소셜 플랫폼.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        name: "팔북정",
        description: "책 검색 및 주문 웹 애플리케이션.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        name: "ShopEase",
        description: "소비자와 판매자를 연결하는 전자 상거래 플랫폼.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 1,
        name: "Feel My Rhythm",
        description: "유저가 음악을 통해 감정을 표현할 수 있는 소셜 플랫폼.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        name: "팔북정",
        description: "책 검색 및 주문 웹 애플리케이션.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        name: "ShopEase",
        description: "소비자와 판매자를 연결하는 전자 상거래 플랫폼.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 1,
        name: "Feel My Rhythm",
        description: "유저가 음악을 통해 감정을 표현할 수 있는 소셜 플랫폼.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        name: "팔북정",
        description: "책 검색 및 주문 웹 애플리케이션.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        name: "ShopEase",
        description: "소비자와 판매자를 연결하는 전자 상거래 플랫폼.",
        imageUrl: "https://via.placeholder.com/300x200",
    },
];

export default function ProjectContainer() {
    return (
        <ProjectsContainer>
            {projects.map((project) => (
                <ProjectCard key={project.id}>
                    <ProjectImage src={project.imageUrl} alt={project.name} />
                    <ProjectDetails>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <button>More View</button>
                    </ProjectDetails>
                </ProjectCard>
            ))}
        </ProjectsContainer>
    );
}
