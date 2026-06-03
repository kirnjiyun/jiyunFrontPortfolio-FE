import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 350px;
    margin: 0 auto;
    border-radius: var(--radius-lg);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.32s ease, box-shadow 0.32s ease,
        border-color 0.32s ease;

    &:hover {
        transform: translateY(-8px) scale(1.01);
        box-shadow: var(--shadow-md);
        border-color: #bfd0e8;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 360px;
        height: 280px;
        margin: 0 auto 1rem auto;
    }
    @media (max-width: 576px) {
        width: 100%;
        max-width: min(94vw, 360px);
        height: 248px;
        margin: 0 auto 0.8rem auto;
    }
`;

export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    transition: transform 0.4s ease;

    ${ProjectCardContainer}:hover & {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        height: 190px;
    }

    @media (max-width: 576px) {
        height: 170px;
    }
`;

export const ProjectDetails = styled.div`
    padding: 1.1rem 1rem;
    text-align: left;
    height: calc(100% - 220px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
    @media (max-width: 768px) {
        padding: 0.5rem;
        height: calc(100% - 190px);
    }
    @media (max-width: 576px) {
        padding: 0.5rem;
        height: calc(100% - 170px);
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 576px) {
        font-size: 0.95rem;
    }
`;

export const ProjectDescription = styled.p`
    font-size: 0.88rem;
    color: var(--color-text-secondary);
    margin: 0;
    opacity: 0.82;
    max-height: 3.2em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    transition: opacity 0.3s ease;

    ${ProjectCardContainer}:hover & {
        opacity: 1;
    }
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
    @media (max-width: 576px) {
        font-size: 0.8rem;
    }
`;

export const ProjectMeta = styled.span`
    display: inline-flex;
    margin-bottom: 0.45rem;
    padding: 0.24rem 0.55rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--color-medium-blue);
    background-color: var(--color-surface-soft);
`;
