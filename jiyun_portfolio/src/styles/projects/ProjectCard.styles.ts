import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative;
    width: 400px;
    height: 350px;
    margin: 0 auto;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 576px) {
        width: 300px;
        height: 300px;
    }
`;

export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
`;

export const ProjectDetails = styled.div`
    padding: 1rem;
    text-align: center;
    height: calc(100% - 220px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
`;

export const ProjectTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-dark-blue);
    margin: 0;
`;

export const ProjectDescription = styled.p`
    font-size: 0.9rem;
    color: #444;
    margin: 0;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;

    ${ProjectCardContainer}:hover & {
        opacity: 1;
        max-height: 100px; /* 적당한 높이 */
    }
`;
