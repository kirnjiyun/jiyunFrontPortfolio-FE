import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 0.875rem 1.25rem;
    background-color: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    margin: 1.5rem auto;
    max-width: 900px;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 576px) {
        flex-direction: column;
        gap: 0.75rem;
        margin: 1rem;
    }
`;

export const FilterLabel = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-fg);
    cursor: pointer;
`;

export const FilterSelect = styled.select`
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    font-size: 0.875rem;
    color: var(--color-fg);
    background-color: var(--color-bg);
    transition: border-color 0.15s ease;

    &:hover {
        border-color: var(--color-ring);
    }

    &:focus {
        outline: none;
        border-color: var(--color-ring);
        box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
    }
`;

export const FilterCheckbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: var(--color-primary);
`;

export const ProjectTransitionStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 1.5rem;
    margin: 0 auto;
    padding: 1.5rem;
    max-width: 1200px;
    justify-items: center;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1rem;
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const ScrollSection = styled.div`
    min-width: 300px;
    margin-top: -40px;
`;
