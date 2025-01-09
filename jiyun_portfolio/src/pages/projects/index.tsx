import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";
import { HeroSection, Title } from "../../styles/about/AboutPageStyles";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";
export default function ProjectPage() {
    return (
        <>
            {" "}
            <HeroSection>
                <Title>Projects</Title>
            </HeroSection>
            <ProjectCarousel />
            <ProjectContainer />
        </>
    );
}
