import styled from "styled-components";

export const MaintenanceWrapper = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
`;

export const MaintenanceHeader = styled.div`
    text-align: center;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MaintenanceBadge = styled.span`
    display: inline-block;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    background: rgba(111, 255, 233, 0.2);
    color: var(--color-medium-blue);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    margin-bottom: 1.25rem;
`;

export const MaintenanceTitle = styled.h1`
    font-family: "SBAggroB", sans-serif;
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    color: var(--color-dark-blue);
    margin-bottom: 0.75rem;
    line-height: 1.3;
`;

export const MaintenanceDescription = styled.p`
    font-size: 1.05rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
`;

export const DownloadButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.5rem;
    font-family: 'SBAggroB', monospace;
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    color: var(--color-dark-blue);
    background: var(--color-brightest-blue);
    border: 2px solid var(--color-dark-blue);
    border-radius: 4px;
    box-shadow: 3px 3px 0 var(--color-dark-blue);
    transition: transform 0.1s ease, box-shadow 0.1s ease;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--color-dark-blue);
        background: #3de8d0;
    }
    &:active {
        transform: translate(1px, 1px);
        box-shadow: 1px 1px 0 var(--color-dark-blue);
    }
    &:focus-visible {
        outline: 3px solid var(--color-dark-blue);
        outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;
