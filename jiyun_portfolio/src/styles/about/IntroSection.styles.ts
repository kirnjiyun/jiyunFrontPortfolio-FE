import styled from "styled-components";

export const MainSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    width: 100%;
    padding: 28px 0 56px;
    border-top: 1px solid var(--color-border);
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
        padding-bottom: 40px;
    }
`;
export const Title = styled.h2`
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.03em;
`;
export const TextContainer = styled.div`
    grid-column: 2 / -1;
    min-width: 0;
    @media (max-width: 768px) { grid-column: auto; }
`;
export const Paragraph = styled.p`
    max-width: 950px;
    font-size: clamp(24px, 3vw, 44px);
    font-weight: 400;
    line-height: 1.55;
    letter-spacing: -0.055em;
    word-break: keep-all;
    white-space: pre-line;
`;
export const InfoContainer = styled.dl`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px 24px;
    margin-top: 64px;
    @media (max-width: 1000px) { grid-template-columns: 1fr; gap: 24px; }
    @media (max-width: 768px) { margin-top: 40px; }
`;
export const InfoItem = styled.div`
    min-width: 0;
    dt {
        margin-bottom: 10px;
        color: var(--color-muted-fg);
        font-family: var(--font-mono);
        font-size: 10px;
        text-transform: uppercase;
    }
    dd { font-size: 14px; overflow-wrap: anywhere; }
`;
export const InfoLink = styled.a`
    text-underline-offset: 5px;
    &:hover { text-decoration: underline; }
    span { display: inline-block; margin-left: 8px; }
`;
export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px 28px;
    margin-top: 36px;
    padding-top: 20px;
    border-top: 1px solid var(--color-border);
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.8;
    text-transform: uppercase;
    > span { color: var(--color-muted-fg); }
    ul { display: flex; flex-wrap: wrap; gap: 8px 20px; list-style: none; }
`;
