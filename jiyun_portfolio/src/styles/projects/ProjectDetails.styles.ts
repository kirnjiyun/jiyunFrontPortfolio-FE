import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const HeroSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    min-height: 40vh;
    padding-top: 64px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const Title = styled.h1`
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 700;
    color: var(--color-fg);
    margin: 0;
    white-space: nowrap;
    text-align: center;
    letter-spacing: -0.03em;
`;

export const Info = styled.p`
    font-size: 0.9rem;
    margin-bottom: 0.625rem;
    line-height: 1.6;
    color: var(--color-muted-fg);

    strong {
        color: var(--color-fg);
        font-weight: 600;
        font-size: 0.95rem;
    }
`;

export const StyledLink = styled.a`
    color: var(--color-fg);
    text-decoration: none;
    transition: opacity 0.15s ease;

    &:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`;

export const Features = styled.div`
    margin-top: 1.25rem;

    ul {
        margin-top: 0.625rem;
        padding-left: 1.25rem;
    }
`;

export const FeatureItem = styled.li`
    font-size: 0.9rem;
    margin-bottom: 0.375rem;
    list-style: disc;
    color: var(--color-muted-fg);
    transition: color 0.15s ease;

    &:hover {
        color: var(--color-fg);
    }
`;

export const Screenshots = styled.div`
    margin-top: 1.5rem;
`;

export const ScreenshotTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-fg);
    text-align: center;
    margin-bottom: 1.25rem;
    letter-spacing: -0.01em;
`;

export const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
`;

export const Screenshot = styled.img`
    width: 200px;
    height: auto;
    display: block;
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
`;

import { keyframes } from "styled-components";

const slideIn = keyframes`
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
`;

export const ScreenshotImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    animation: ${slideIn} 0.3s ease-out;
`;
