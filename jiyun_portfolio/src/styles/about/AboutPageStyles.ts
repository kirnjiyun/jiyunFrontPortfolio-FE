import styled from "styled-components";
import Image from "next/image";

export const HeroSection = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: clamp(48px, 7vw, 100px);
    min-height: 430px;
    padding: 132px var(--page-gutter) 42px;
    border-bottom: 1px solid var(--color-border);

    @media (max-width: 768px) {
        min-height: 330px;
        padding-top: 120px;
        padding-bottom: 28px;
    }
`;

export const Title = styled.h1`
    font-size: clamp(76px, 15vw, 240px);
    font-weight: 400;
    line-height: 0.82;
    letter-spacing: -0.085em;
    text-transform: lowercase;
    overflow-wrap: anywhere;
    margin: 0 0 0 -0.055em;
    color: var(--color-fg);
    @media (max-width: 480px) { font-size: clamp(64px, 19vw, 90px); }
`;

export const Eyebrow = styled.p`
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

export const Section = styled.div`
    padding: 0 var(--page-gutter) 80px;
    color: var(--color-fg);
`;

export const PageMeta = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    padding: 24px var(--page-gutter) 64px;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.6;
    text-transform: uppercase;
    > p:last-child { grid-column: 4; text-align: right; }
    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 32px;
        > p:last-child { grid-column: auto; text-align: left; }
    }
`;

export const TimelineAction = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
    padding: 0 0 80px;
    > div { grid-column: 2 / -1; justify-content: flex-start; }
    > div > button {
        min-width: 0;
        padding: 0 0 8px;
        border: 0;
        border-bottom: 1px solid var(--color-fg);
        background: transparent;
        color: var(--color-fg);
        font-size: 13px;
        border-radius: 0;
    }
    > div > button::after { content: "↗"; margin-left: 24px; }
    @media (max-width: 768px) { display: block; padding-bottom: 48px; }
`;

export const TypingText = styled.div`display: inline-block;`;
export const IconContainer = styled.div`margin-right: 20px;`;
export const StyledImage = styled(Image)``;
export const SectionTitle = styled.h2`
    font-size: 14px;
    font-family: var(--font-mono);
    font-weight: 400;
`;
export const List = styled.ul`list-style: none; line-height: 1.8;`;
