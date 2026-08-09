import styled from "styled-components";

export const TimelineContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 200px;
    padding: 1.5rem;
    border-radius: var(--radius);
    background: var(--color-card);
    border: 1px solid var(--color-border);
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Timeline = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-border);
    z-index: 0;

    @media (max-width: 768px) {
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        transform: translateX(-50%);
    }
`;

export const Point = styled.div`
    position: relative;
    top: -5px;
    width: 14px;
    height: 14px;
    background: var(--color-primary);
    border: 3px solid var(--color-border);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: scale(1.2);
        background: var(--color-muted-fg);
        border-color: var(--color-fg);
    }

    &:hover::after {
        content: attr(data-event);
        position: absolute;
        top: -36px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-primary);
        color: var(--color-primary-fg);
        padding: 4px 8px;
        border-radius: calc(var(--radius) - 2px);
        white-space: nowrap;
        font-size: 0.75rem;
    }

    @media (max-width: 768px) {
        top: auto;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const DateLabel = styled.div`
    margin-top: 0.75rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-fg);

    @media (max-width: 768px) {
        margin-top: 0;
        margin-left: 0.75rem;
        white-space: nowrap;
    }
`;

export const TimelineItem = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    @media (max-width: 768px) {
        position: relative;
        flex-direction: row;
        align-items: flex-start;
        margin: 1rem 0;
        transform: translateX(-50%);
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--color-fg);
    letter-spacing: -0.02em;
`;
