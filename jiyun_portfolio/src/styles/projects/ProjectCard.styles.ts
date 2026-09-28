import styled from "styled-components";

export const ProjectCardContainer = styled.article`
    width: 100%;
    border-bottom: 1px solid var(--color-border);
    > a {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        align-items: start;
        gap: 0;
        padding: 36px 0 48px;
        text-decoration: none;
        color: inherit;
    }
    > a:focus-visible { outline: 1px solid currentColor; outline-offset: 5px; }
    @media (max-width: 800px) {
        > a { grid-template-columns: 1fr 3fr; row-gap: 28px; }
    }
    @media (max-width: 480px) {
        > a { grid-template-columns: 1fr; gap: 24px; padding: 28px 0 36px; }
    }
`;
export const ProjectIndex = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    padding-top: 5px;
    color: var(--color-muted-fg);
`;
export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.5;
    object-fit: cover;
    background: var(--color-muted);
    transition: filter 0.35s ease;
    filter: saturate(0.8);
    ${ProjectCardContainer}:hover & { filter: saturate(1); }
    @media (max-width: 800px) { grid-column: 2; }
    @media (max-width: 480px) { grid-column: 1; }
`;
export const ProjectDetails = styled.div`
    padding: 0 28px 0 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    @media (max-width: 800px) { padding-right: 0; }
`;
export const ProjectTitle = styled.h2`
    margin: 0;
    font-size: clamp(24px, 2.4vw, 38px);
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: -0.05em;
    overflow-wrap: anywhere;
    word-break: keep-all;
`;
export const ProjectDescription = styled.p`
    margin: 0;
    font-size: 13px;
    color: var(--color-muted-fg);
    line-height: 1.8;
    word-break: keep-all;
`;
export const ProjectMeta = styled.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--color-muted-fg);
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;
export const ProjectLinkLabel = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 28px;
    padding: 12px 0 5px;
    border-bottom: 1px solid var(--color-border);
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    > span { font-family: sans-serif; font-size: 20px; transition: transform 0.2s; }
    ${ProjectCardContainer}:hover & > span { transform: translate(3px, -3px); }
`;
