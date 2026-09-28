import styled from "styled-components";
export { Section, SectionTitle } from "./Education.styles";

export const CardGrid = styled.div`
    grid-column: 2 / -1;
    min-width: 0;
    .empty { color: var(--color-muted-fg); font-size: 14px; }
    @media (max-width: 768px) { grid-column: auto; }
`;
export const CertificationItem = styled.details`
    border-bottom: 1px solid var(--color-border);
    &:first-child > summary { padding-top: 0; }
    &:last-child { border-bottom: 0; }
    &[open] > summary .toggle { transform: rotate(45deg); }
    > summary {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;
        padding: 24px 0;
        list-style: none;
        cursor: pointer;
    }
    > summary::-webkit-details-marker { display: none; }
    h3 { font-size: clamp(19px, 2vw, 28px); font-weight: 400; line-height: 1.4; letter-spacing: -0.035em; }
    p { margin-top: 8px; font-size: 14px; color: var(--color-muted-fg); }
    .toggle { font-size: 28px; font-weight: 300; line-height: 1; transition: transform 0.2s; }
    .description {
        max-width: 760px;
        padding: 0 32px 28px 0;
        font-size: 14px;
        line-height: 1.9;
        color: var(--color-muted-fg);
        white-space: pre-line;
        overflow-wrap: anywhere;
    }
    .description a { color: var(--color-fg); text-decoration: underline; text-underline-offset: 4px; }
`;
