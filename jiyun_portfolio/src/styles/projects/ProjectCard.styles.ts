import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
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

    @media (max-width: 768px) {
        width: 100%;
        max-width: 340px;
        height: 260px;
        margin: 0 auto 1.5rem auto;
    }
    @media (max-width: 576px) {
        width: 100%;
        max-width: 98vw;
        height: 220px;
        margin: 0 auto 1rem auto;
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
    @media (max-width: 768px) {
        padding: 0.5rem;
        height: calc(100% - 140px);
    }
    @media (max-width: 576px) {
        padding: 0.3rem;
        height: calc(100% - 100px);
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-dark-blue);
    margin: 0;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 576px) {
        font-size: 0.95rem;
    }
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
    @media (max-width: 768px) {
        font-size: 0.85rem;
        ${ProjectCardContainer}:hover & {
            max-height: 60px;
        }
    }
    @media (max-width: 576px) {
        font-size: 0.8rem;
        ${ProjectCardContainer}:hover & {
            max-height: 40px;
        }
    }
`;
