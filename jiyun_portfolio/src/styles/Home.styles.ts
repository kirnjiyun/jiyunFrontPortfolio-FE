import styled from "styled-components";
import Link from "next/link";

export const HomeWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6rem 2rem 4rem;
    background-color: var(--color-bg);
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 5rem 1.5rem 3rem;
    }
`;

export const AnimatedText = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    letter-spacing: -0.03em;
    color: var(--color-fg);
    line-height: 1.15;
`;

export const TypingText = styled.div`
    line-height: 1.2;
    display: inline-block;
    position: relative;

    &::after {
        content: "|";
        position: absolute;
        right: -8px;
        animation: blink 1s steps(2, start) infinite;
        color: var(--color-muted-fg);
        font-weight: 300;
    }

    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

export const HeroSubText = styled.p`
    margin-top: 1.5rem;
    text-align: center;
    color: var(--color-muted-fg);
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 400;
    letter-spacing: -0.01em;
    max-width: 600px;
    line-height: 1.6;
`;

/* CTA Buttons for hero */
export const HeroActions = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 2.5rem;
`;

export const HeroPrimaryButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: var(--radius);
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
    border: 1px solid transparent;
    cursor: pointer;
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.9;
    }
`;

export const HeroSecondaryButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: var(--radius);
    background-color: transparent;
    color: var(--color-fg);
    border: 1px solid var(--color-border);
    cursor: pointer;
    transition: background-color 0.15s ease, border-color 0.15s ease;

    &:hover {
        background-color: var(--color-accent);
    }
`;
