// pages/projects/index.js
import React from "react";
import { HeroSection, Title } from "@/styles/about/AboutPageStyles";
import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";

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
    console.log("Projects data received in ProjectsPage:", projectsData); // 디버깅용

    return (
        <>
            <HeroSection>
                <Title>Projects</Title>
            </HeroSection>

            <ProjectCarousel />
            <ProjectContainer projectsData={projectsData} />
        </>
    );
}
