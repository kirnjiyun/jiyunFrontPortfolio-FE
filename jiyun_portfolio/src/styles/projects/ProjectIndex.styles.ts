import styled from "styled-components";

export const ProjectsPage = styled.main`
    padding: 0 var(--page-gutter) 100px;
`;
export const HeroSection = styled.header`
    padding: clamp(100px, 12vw, 180px) 0 64px;
    border-bottom: 1px solid var(--color-border);
`;
export const Eyebrow = styled.p`
    margin: 0 0 32px;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`;
export const Title = styled.h1`
    margin: 0;
    font-size: clamp(64px, 13vw, 188px);
    font-weight: 400;
    line-height: 0.94;
    letter-spacing: -0.075em;
`;
export const HeroDescription = styled.p`
    max-width: 400px;
    margin: 40px 0 0 50%;
    font-size: 14px;
    line-height: 1.9;
    word-break: keep-all;
    color: var(--color-muted-fg);
    @media (max-width: 600px) { margin-left: 0; margin-top: 28px; }
`;
export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid var(--color-border);
    font-family: var(--font-mono);
    font-size: 11px;
`;
export const ResultCount = styled.p`
    margin: 0 auto 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    @media (max-width: 480px) { width: 100%; }
`;
export const FilterLabel = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;
export const FilterCheckbox = styled.input`
    width: 14px;
    height: 14px;
    margin: 0;
    accent-color: var(--color-fg);
    cursor: pointer;
`;
export const ProjectTransitionStyles = styled.div`
    width: 100%;
    > div { width: 100%; }
`;
export const StateMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 80px 0 100px 25%;
    border-bottom: 1px solid var(--color-border);
    h2 {
        font-size: clamp(24px, 3vw, 40px);
        font-weight: 400;
        letter-spacing: -0.04em;
        margin: 0;
        word-break: keep-all;
    }
    p { margin: 0; color: var(--color-muted-fg); font-size: 14px; }
    button {
        padding: 10px 0;
        border: 0;
        border-bottom: 1px solid currentColor;
        background: transparent;
        color: inherit;
        cursor: pointer;
        font-size: 12px;
    }
    @media (max-width: 600px) { padding-left: 0; }
`;
export const SkeletonRow = styled.div`
    height: clamp(240px, 32vw, 460px);
    margin: 32px 0;
    background: linear-gradient(90deg, transparent 0 50%, var(--color-muted) 50%);
    border-bottom: 1px solid var(--color-border);
    animation: project-pulse 1.5s infinite ease-in-out;
    @keyframes project-pulse { 50% { opacity: 0.45; } }
    @media (max-width: 600px) { background: var(--color-muted); }
    @media (prefers-reduced-motion: reduce) { animation: none; }
`;
