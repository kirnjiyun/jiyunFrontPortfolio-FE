import styled from "styled-components";
import { animated } from "react-spring";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: var(--radius);
    background: var(--color-card);
    border: 1px solid var(--color-border);
    min-height: 200px;
    width: 100%;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-fg);
    margin-bottom: 1.25rem;
    text-align: center;
    letter-spacing: -0.02em;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
`;

export const FlipContainer = styled.div`
    perspective: 1000px;
    width: 100%;
    height: 220px;
    position: relative;
`;

export const FlipInner = styled(animated.div)`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    position: relative;
`;

export const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: var(--color-card);
    border-radius: var(--radius);
    border: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.25rem;
    color: var(--color-fg);
    transition: background-color 0.3s ease, border-color 0.3s ease;

    h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        letter-spacing: -0.01em;
    }
    p {
        font-size: 0.85rem;
        margin-bottom: 0.375rem;
        color: var(--color-muted-fg);
    }
`;

export const CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: var(--color-card);
    border-radius: var(--radius);
    border: 1px solid var(--color-border);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.25rem;
    color: var(--color-fg);
    transition: background-color 0.3s ease, border-color 0.3s ease;

    h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .description {
        font-size: 0.85rem;
        margin-bottom: 0.375rem;
        line-height: 1.5;
        color: var(--color-muted-fg);
    }
`;

export const DetailButton = styled.button`
    align-self: flex-end;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    background-color: var(--color-bg);
    color: var(--color-fg);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0.5rem;
    transition: background-color 0.15s ease;

    &:hover {
        background-color: var(--color-accent);
    }
`;

export const CloseButton = styled.button`
    align-self: flex-end;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0.5rem;
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.9;
    }
`;
