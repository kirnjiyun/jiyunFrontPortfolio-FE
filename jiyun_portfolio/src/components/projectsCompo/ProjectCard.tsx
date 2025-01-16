// import React from "react";

// import {
//     ProjectCardContainer,
//     ProjectImage,
//     ProjectDetails,
// } from "../../styles/projects/ProjectCard.styles";
// import Link from "next/link";
// const ProjectCard = ({ project }) => {
//     return (
//         <ProjectCardContainer>
//             <Link
//                 href={`/projects/${project.title
//                     .toLowerCase()
//                     .replace(/\s+/g, "-")}`}
//             >
//                 <ProjectImage
//                     src={
//                         project.thumbnail
//                             ? project.thumbnail
//                             : "/images/default-image.webp"
//                     }
//                     alt={project.name}
//                 />
//                 <ProjectDetails>
//                     <h2>{project.name}</h2>
//                     <p>{project.description}</p>
//                     {/* <p>
//                         <strong>{project.category} </strong>프로젝트
//                     </p> */}
//                 </ProjectDetails>{" "}
//             </Link>
//         </ProjectCardContainer>
//     );
// };

// export default ProjectCard;
// ProjectCard.js
import React from "react";
import Link from "next/link";

import {
    ProjectCardContainer,
    ProjectImage,
    ProjectDetails,
    ProjectTitle,
    ProjectDescription,
} from "../../styles/projects/ProjectCard.styles";

const ProjectCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            <Link
                href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
            >
                <ProjectImage
                    src={
                        project.thumbnail
                            ? project.thumbnail
                            : "/images/default-image.webp"
                    }
                    alt={project.name}
                />
                <ProjectDetails>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDescription>
                        {project.description}
                    </ProjectDescription>
                </ProjectDetails>
            </Link>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
