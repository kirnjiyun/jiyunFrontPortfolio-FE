import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: var(--radius);
    background: var(--color-card);
    border: 1px solid var(--color-border);
    min-height: 200px;
    width: 100%;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-fg);
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: -0.02em;
`;

export const List = styled.ul`
    list-style: none;
    width: 100%;

    li {
        color: var(--color-muted-fg);
        margin: 0.75rem 0;
        font-size: 0.9rem;
        padding: 0.75rem;
        border-radius: calc(var(--radius) - 2px);
        border: 1px solid var(--color-border);
        background: var(--color-bg);
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    strong {
        color: var(--color-fg);
        font-weight: 600;
        font-size: 0.95rem;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.25rem;
    border-radius: var(--radius);
    background: var(--color-muted);
    border: 1px solid var(--color-border);
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;
