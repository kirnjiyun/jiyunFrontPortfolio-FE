import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";
import { HeroSection, Title } from "../../styles/about/AboutPageStyles";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";

export async function getServerSideProps() {
    const baseUrl = "http://localhost:4000"; // json-server 주소
    const response = await fetch(`${baseUrl}/projectsData`);
    const projectsData = await response.json();

    return {
        props: {
            projectsData,
        },
    };
}

export default function ProjectPage({ projectsData }) {
    console.log("freqer", projectsData);
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
