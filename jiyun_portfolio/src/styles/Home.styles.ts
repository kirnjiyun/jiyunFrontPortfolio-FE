import styled from "styled-components";
import Link from "next/link";

export const HomeWrapper = styled.main`width: 100%;`;
export const Hero = styled.section`
    position: relative;
    min-height: min(920px, 100svh);
    padding: 118px var(--page-gutter) 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
    @media (max-width: 700px) { min-height: 92svh; padding-top: 120px; }
`;
export const HeroEyebrow = styled.p`
    position: absolute;
    top: 112px;
    left: var(--page-gutter);
    font: 11px / 1.8 var(--font-mono);
    color: var(--color-muted-fg);
`;
export const HeroTitle = styled.h1`
    position: relative;
    z-index: 1;
    font-weight: 400;
    font-size: clamp(52px, 7.9vw, 154px);
    line-height: 1.04;
    letter-spacing: -0.065em;
    margin: 175px 0 40px;
    span { display: block; }
    span:first-child { margin-left: 25%; }
    @media (max-width: 700px) {
        font-size: clamp(30px, 9.1vw, 68px);
        letter-spacing: -0.06em;
        margin: 240px 0 34px;
        span:first-child { margin-left: 0; }
    }
`;
export const HeroBottom = styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: 24px;
    p { max-width: 390px; font-size: 13px; line-height: 1.8; word-break: keep-all; }
    a { justify-self: end; font: 12px var(--font-mono); padding: 12px 0; }
    a:hover { text-decoration: underline; text-underline-offset: 5px; }
    @media (max-width: 700px) { grid-template-columns: 1fr; gap: 14px; a { justify-self: start; } }
`;
export const WorkSection = styled.section`
    padding: 36px var(--page-gutter) 90px;
    scroll-margin-top: 72px;
`;
export const SectionHeading = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 48px;
    h2 { font-size: clamp(30px, 4vw, 64px); font-weight: 400; letter-spacing: -0.055em; }
    span { font: 11px var(--font-mono); color: var(--color-muted-fg); }
`;
export const WorkGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px 24px;
    figure:first-child { grid-column: 1 / -1; }
    figure { min-width: 0; }
    a { display: block; overflow: hidden; background: var(--color-muted); }
    img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; transition: transform 700ms ease; }
    a:hover img { transform: scale(1.025); }
    figcaption { display: flex; justify-content: space-between; gap: 16px; padding-top: 13px; font: 12px var(--font-mono); }
    figcaption span:last-child { color: var(--color-muted-fg); }
    @media (max-width: 700px) { grid-template-columns: 1fr; gap: 32px; }
`;
export const AllProjectsLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;
    padding: 20px 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    font-size: clamp(24px, 3vw, 44px);
    letter-spacing: -0.045em;
    transition: padding 200ms ease;
    &:hover { padding-left: 12px; padding-right: 12px; }
`;
