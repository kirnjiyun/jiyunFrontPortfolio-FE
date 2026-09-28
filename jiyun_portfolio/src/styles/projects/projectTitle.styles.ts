import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: background-color 0.3s ease;
`;

export const ScreenshotButton = styled.button`
    width: 100%;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-fg);
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    cursor: pointer;
    margin-top: 1rem;
    text-align: center;
    transition: background-color 0.15s ease, border-color 0.15s ease;

    &:hover {
        background-color: var(--color-accent);
    }
`;

export const BackButton = styled.button`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 36px;
    height: 36px;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-muted-fg);
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
        background-color: var(--color-accent);
        color: var(--color-fg);
    }

    @media (max-width: 600px) {
        top: 1rem;
        left: 1rem;
    }
`;

export const ArrowSymbol = styled.span`
    font-size: 1rem;
    line-height: 1;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    margin: 6rem auto 4rem;
    padding: 3rem var(--page-gutter);
    position: relative;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 600px) {
        margin: 5rem auto 1.5rem;
        padding: 2.5rem var(--page-gutter);
    }
`;

export const ProjectHeader = styled.div`
    text-align: left;
    margin-bottom: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border);
`;

export const ProjectTitle = styled.h1`
    font-size: clamp(48px, 8vw, 132px);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.06em;
    overflow-wrap: anywhere;
    color: var(--color-fg);
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
        font-size: clamp(36px, 10vw, 60px);
    }
`;

export const ProjectSubtitle = styled.div`
    color: var(--color-muted-fg);
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
`;

export const ThumbnailWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
`;

export const ThumbnailImage = styled.img`
    width: 100%;
    max-width: 1200px;
    object-fit: cover;
    cursor: pointer;
    border-radius: var(--radius);
    border: 1px solid var(--color-border);
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.95;
    }
`;

export const InfoSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 6vw, 6rem);
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    min-width: 0;
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    min-width: 0;
`;

export const Description = styled.p`
    font-size: 0.95rem;
    color: var(--color-muted-fg);
    line-height: 1.7;
    margin: 0;
`;

export const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const InfoLabel = styled.div`
    color: var(--color-muted-fg);
    margin-bottom: 0.375rem;
    font-weight: 400;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

export const InfoValue = styled.div`
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    color: var(--color-fg);

    &:last-child {
        margin-bottom: 0;
    }
`;

export const BadgesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
`;

export const TechBadge = styled.span`
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: calc(var(--radius) - 2px);
    border: 1px solid var(--color-border);
    display: inline-block;
    white-space: nowrap;
`;

export const FeaturesCard = styled.div`
    background-color: transparent;
    padding: 1.5rem 0;
    border-radius: var(--radius);
    border-top: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 1rem 0;
    }
`;

export const FeaturesTitle = styled.h3`
    font-size: 1rem;
    color: var(--color-fg);
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0;
`;

export const FeaturesList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const FeatureItem = styled.li`
    font-size: 0.875rem;
    color: var(--color-muted-fg);
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    transition: border-color 0.3s ease;

    &:last-child {
        border-bottom: none;
    }
`;

export const LinkCard = styled.div`
    background-color: transparent;
    padding: 1.5rem 0;
    border-radius: var(--radius);
    border-top: 1px solid var(--color-border);
    width: 100%;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 1rem 0;
    }
`;

export const LinksTitle = styled.h3`
    font-size: 1rem;
    color: var(--color-fg);
    font-weight: 600;
    margin-bottom: 0.75rem;
`;

export const LinkRow = styled.div`
    margin-bottom: 0.5rem;
`;

export const LinkLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-muted-fg);
    margin-right: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
`;

export const LinkAnchor = styled.a`
    font-size: 0.875rem;
    overflow-wrap: anywhere;
    color: var(--color-fg);
    text-decoration: none;
    transition: opacity 0.15s ease;

    &:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`;

export const SkeletonTitle = styled.div`
    width: 60%;
    height: 32px;
    background-color: var(--color-muted);
    border-radius: var(--radius);
    animation: pulse 1.5s infinite ease-in-out;

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;

export const SkeletonText = styled.div`
    width: 100%;
    height: 16px;
    background-color: var(--color-muted);
    border-radius: calc(var(--radius) - 2px);
    animation: pulse 1.5s infinite ease-in-out;

    & + & {
        margin-top: 0.5rem;
    }
`;

export const SkeletonButton = styled.div`
    width: 120px;
    height: 32px;
    background-color: var(--color-muted);
    border-radius: var(--radius);
    animation: pulse 1.5s infinite ease-in-out;
`;
