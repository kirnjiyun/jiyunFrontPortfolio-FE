import Link from "next/link";
import {
    ProjectCardContainer, ProjectImage, ProjectDetails, ProjectTitle,
    ProjectDescription, ProjectMeta, ProjectIndex, ProjectLinkLabel,
} from "@/styles/projects/ProjectCard.styles";

const ProjectCard = ({ project, index = 0 }) => (
    <ProjectCardContainer>
        <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
            <ProjectIndex>({String(index + 1).padStart(2, "0")})</ProjectIndex>
            <ProjectDetails>
                <ProjectMeta>{project.category || "Project"}{project.isMajor ? " / Selected" : ""}</ProjectMeta>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinkLabel>View project <span aria-hidden="true">↗</span></ProjectLinkLabel>
            </ProjectDetails>
            <ProjectImage
                src={project.thumbnail || "/images/portfolio-thumbnail.jpg"}
                alt={`${project.name} 프로젝트 화면`}
                width={900}
                height={600}
                loading="lazy"
                decoding="async"
            />
        </Link>
    </ProjectCardContainer>
);
export default ProjectCard;
