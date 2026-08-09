import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 350px;
    margin: 0 auto;
    border-radius: var(--radius);
    background-color: var(--color-card);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    overflow: hidden;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease, background-color 0.3s ease;

    &:hover {
        border-color: hsl(var(--ring) / 0.3);
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        max-width: 360px;
        height: 280px;
    }
    @media (max-width: 576px) {
        max-width: min(94vw, 360px);
        height: 260px;
    }
`;

export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: 210px;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${ProjectCardContainer}:hover & {
        transform: scale(1.03);
    }

    @media (max-width: 768px) {
        height: 180px;
    }
    @media (max-width: 576px) {
        height: 160px;
    }
`;

export const ProjectDetails = styled.div`
    padding: 1rem;
    text-align: left;
    height: calc(100% - 210px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.375rem;

    @media (max-width: 768px) {
        padding: 0.75rem;
        height: calc(100% - 180px);
    }
    @media (max-width: 576px) {
        padding: 0.75rem;
        height: calc(100% - 160px);
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-fg);
    margin: 0;
    letter-spacing: -0.01em;
`;

export const ProjectDescription = styled.p`
    font-size: 0.8rem;
    color: var(--color-muted-fg);
    margin: 0;
    max-height: 2.8em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
`;

export const ProjectMeta = styled.span`
    display: inline-flex;
    align-self: flex-start;
    margin-bottom: 0.25rem;
    padding: 0.125rem 0.5rem;
    border-radius: calc(var(--radius) - 2px);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--color-muted-fg);
    background-color: var(--color-muted);
    border: 1px solid var(--color-border);
`;
