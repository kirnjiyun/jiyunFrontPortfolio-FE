import styled from "styled-components";
import { animated } from "react-spring";

export const MainSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 1.5rem 0.5rem;
    }
`;

export const ScrollTextContainer = styled.div`
    position: absolute;
    top: 30%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ScrollText = styled(animated.div)`
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-fg);
    white-space: nowrap;
    opacity: 0.08;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const ScrollTextLight = styled(animated.div)`
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-muted-fg);
    white-space: nowrap;
    opacity: 0.15;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: var(--radius);
    background: var(--color-card);
    border: 1px solid var(--color-border);
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (min-width: 769px) {
        flex-direction: row;
        padding: 2.5rem;
    }
`;

export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-fg);
    letter-spacing: -0.02em;
    text-align: center;
`;

export const Paragraph = styled.p`
    margin: 1rem 0;
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--color-muted-fg);

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const InfoContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const InfoItem = styled.p`
    font-size: 0.9rem;
    color: var(--color-fg);
`;

export const InfoLink = styled.a`
    color: var(--color-fg);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.15s ease;

    &:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`;

export const TechStack = styled.p`
    font-size: 0.9rem;
    color: var(--color-muted-fg);
    margin-top: 0.5rem;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        gap: 0.75rem;
        padding: 1rem;
    }
`;
