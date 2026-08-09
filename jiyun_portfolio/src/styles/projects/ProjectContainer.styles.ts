import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;
