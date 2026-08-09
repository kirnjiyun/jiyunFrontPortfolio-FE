import styled from "styled-components";

export const Wrap = styled.main`
    min-height: 100vh;
    padding: 6rem 1.5rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
`;

export const PageTitle = styled.h1`
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--color-fg);
    letter-spacing: -0.02em;
`;

export const PageDescription = styled.p`
    color: var(--color-muted-fg);
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
`;

export const Card = styled.section`
    width: 100%;
    max-width: 980px;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    padding: 1.25rem;
    margin-bottom: 1rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    color: var(--color-fg);
    font-size: 0.875rem;
    font-weight: 500;
`;

export const Input = styled.input`
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    color: var(--color-fg);
    border-radius: calc(var(--radius) - 2px);
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    transition: border-color 0.15s ease;

    &:focus {
        outline: none;
        border-color: var(--color-ring);
        box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    color: var(--color-fg);
    border-radius: calc(var(--radius) - 2px);
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    min-height: 120px;
    resize: vertical;
    transition: border-color 0.15s ease;

    &:focus {
        outline: none;
        border-color: var(--color-ring);
        box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
    }
`;

export const Full = styled.div`
    grid-column: 1 / -1;
`;

export const SubmitButton = styled.button`
    margin-top: 0.75rem;
    border: 1px solid transparent;
    background: var(--color-primary);
    color: var(--color-primary-fg);
    border-radius: var(--radius);
    padding: 0.625rem 1.25rem;
    font-weight: 500;
    font-size: 0.875rem;
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.9;
    }
`;

export const StatusText = styled.p`
    margin-top: 0.75rem;
    color: var(--color-muted-fg);
    font-size: 0.85rem;
`;

export const Actions = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.75rem;
`;

export const GhostButton = styled.button`
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    color: var(--color-fg);
    border-radius: calc(var(--radius) - 2px);
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    font-size: 0.85rem;
    transition: background-color 0.15s ease;

    &:hover {
        background: var(--color-accent);
    }
`;

export const DangerButton = styled.button`
    border: 1px solid hsl(var(--destructive));
    background: hsl(var(--destructive) / 0.1);
    color: hsl(var(--destructive));
    border-radius: calc(var(--radius) - 2px);
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    font-size: 0.85rem;
    transition: background-color 0.15s ease;

    &:hover {
        background: hsl(var(--destructive) / 0.2);
    }
`;

export const ItemList = styled.ul`
    margin-top: 0.75rem;
    list-style: none;
    display: grid;
    gap: 0.5rem;
`;

export const ItemRow = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-muted);
    border: 1px solid var(--color-border);
    border-radius: calc(var(--radius) - 2px);
    padding: 0.5rem 0.75rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const ItemTitle = styled.span`
    font-size: 0.875rem;
    color: var(--color-fg);
    font-weight: 500;
`;
