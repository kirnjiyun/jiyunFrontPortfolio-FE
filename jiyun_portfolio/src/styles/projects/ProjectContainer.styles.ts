import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: grid;
    gap: 16px;
`;

export const ProjectCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
`;

export const ProjectDetails = styled.div`
    margin-top: 8px;
    h2 {
        font-size: 1.2em;
        margin-bottom: 8px;
    }
    p {
        font-size: 0.9em;
        color: #666;
    }
    button {
        margin-top: 8px;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;
