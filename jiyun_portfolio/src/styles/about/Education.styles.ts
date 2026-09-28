import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    padding: 28px 0 80px;
    border-top: 1px solid var(--color-border);
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 36px;
        padding-bottom: 48px;
    }
`;
export const SectionTitle = styled.h2`
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.03em;
    text-transform: uppercase;
`;
export const List = styled.ul`
    grid-column: 2 / -1;
    list-style: none;
    min-width: 0;
    > li {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 24px;
        padding: 24px 0;
        border-bottom: 1px solid var(--color-border);
    }
    > li:first-child { padding-top: 0; }
    > li:last-child { border-bottom: 0; }
    h3, h4 {
        font-size: clamp(19px, 2vw, 28px);
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: -0.035em;
    }
    h4 { margin-top: 20px; }
    p { margin-top: 10px; color: var(--color-muted-fg); font-size: 14px; }
    .period { margin-top: 4px; font-family: var(--font-mono); font-size: 11px; }
    .programs { list-style: none; margin-top: 16px; color: var(--color-muted-fg); font-size: 14px; }
    .programs li + li { margin-top: 8px; }
    .empty { display: block; color: var(--color-muted-fg); font-size: 14px; }
    @media (max-width: 768px) { grid-column: auto; }
    @media (max-width: 480px) { > li { grid-template-columns: 1fr; gap: 12px; } }
`;
