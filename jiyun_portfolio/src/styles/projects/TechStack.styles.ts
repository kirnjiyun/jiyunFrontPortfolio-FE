import styled from "styled-components";

export const TechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

export const TechBadge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: calc(var(--radius) - 2px);
    color: var(--color-fg);
    background-color: var(--color-muted);
    border: 1px solid var(--color-border);
    cursor: default;
    transition: background-color 0.15s ease, border-color 0.15s ease;

    &:hover {
        border-color: var(--color-ring);
    }
`;
