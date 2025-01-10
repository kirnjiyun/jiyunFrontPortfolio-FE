import ProjectCarousel from "@/components/projectsCompo/ProjectCarousel";
import { HeroSection, Title } from "../../styles/about/AboutPageStyles";
import ProjectContainer from "@/components/projectsCompo/ProjectContainer";
export async function getStaticProps() {
    // json-server API에서 데이터 가져오기
    const baseUrl = "http://localhost:4000"; // json-server 주소
    const [projectsDataRes] = await Promise.all([
        fetch(`${baseUrl}/projectsData`),
    ]);

    const projectsData = await projectsDataRes.json();

    return {
        props: {
            projectsData,
        },
    };
}

export default function ProjectPage({ projectsData }) {
    console.log("Projects data received in ProjectPage:", projectsData); // 디버깅용
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
