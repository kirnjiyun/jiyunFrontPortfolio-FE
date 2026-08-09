import styled from "styled-components";
import Image from "next/image";

export const Title = styled.h1`
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 700;
    color: var(--color-fg);
    margin: 0;
    white-space: nowrap;
    text-align: center;
    letter-spacing: -0.03em;
`;

export const TypingText = styled.div`
    display: inline-block;
    position: relative;
    line-height: 1.2;
    white-space: nowrap;

    &::after {
        content: "|";
        position: absolute;
        left: 100%;
        margin-left: 0.2em;
        color: var(--color-muted-fg);
        font-size: inherit;
        animation: blink 0.8s steps(2, start) infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
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

export const IconContainer = styled.div`
    margin-right: 20px;
`;

export const StyledImage = styled(Image)``;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    gap: 2rem;
    background-color: var(--color-card);
    color: var(--color-fg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    margin: 2rem auto;
    max-width: 1000px;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
        margin: 1rem;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--color-fg);
    letter-spacing: -0.02em;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    line-height: 1.8;
    font-size: 0.95rem;
    color: var(--color-muted-fg);
`;
