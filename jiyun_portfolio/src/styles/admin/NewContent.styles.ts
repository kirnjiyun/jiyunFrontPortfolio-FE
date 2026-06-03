import styled from "styled-components";

export const Wrap = styled.main`
    min-height: 100vh;
    padding: 110px 1rem 2rem 96px;

    @media (max-width: 768px) {
        padding: 88px 0.9rem 1.6rem;
    }
`;

export const PageTitle = styled.h1`
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    margin-bottom: 0.8rem;
    color: var(--color-text-primary);
`;

export const PageDescription = styled.p`
    color: var(--color-text-secondary);
    margin-bottom: 1.3rem;
`;

export const Card = styled.section`
    width: 100%;
    max-width: 980px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    box-shadow: var(--shadow-sm);
    padding: 1rem;
    margin-bottom: 1.1rem;
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    color: var(--color-text-primary);
    font-size: 0.92rem;
    font-weight: 600;
`;

export const Input = styled.input`
    border: 1px solid var(--color-border);
    background: var(--color-surface-soft);
    color: var(--color-text-primary);
    border-radius: 10px;
    padding: 0.65rem 0.75rem;
`;

export const TextArea = styled.textarea`
    border: 1px solid var(--color-border);
    background: var(--color-surface-soft);
    color: var(--color-text-primary);
    border-radius: 10px;
    padding: 0.65rem 0.75rem;
    min-height: 120px;
    resize: vertical;
`;

export const Full = styled.div`
    grid-column: 1 / -1;
`;

export const SubmitButton = styled.button`
    margin-top: 0.75rem;
    border: 0;
    background: linear-gradient(135deg, #3e5c76, #1d2d44);
    color: #fff;
    border-radius: 10px;
    padding: 0.7rem 1rem;
    font-weight: 700;
`;

export const StatusText = styled.p`
    margin-top: 0.8rem;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
`;

export const Actions = styled.div`
    display: flex;
    gap: 0.55rem;
    flex-wrap: wrap;
    margin-top: 0.7rem;
`;

export const GhostButton = styled.button`
    border: 1px solid var(--color-border);
    background: var(--color-surface-soft);
    color: var(--color-text-primary);
    border-radius: 9px;
    padding: 0.55rem 0.8rem;
    font-weight: 600;
`;

export const DangerButton = styled.button`
    border: 1px solid #d96f6f;
    background: #fff0f0;
    color: #a43d3d;
    border-radius: 9px;
    padding: 0.55rem 0.8rem;
    font-weight: 600;
`;

export const ItemList = styled.ul`
    margin-top: 0.8rem;
    list-style: none;
    display: grid;
    gap: 0.5rem;
`;

export const ItemRow = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    background: var(--color-surface-soft);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    padding: 0.6rem 0.75rem;
`;

export const ItemTitle = styled.span`
    font-size: 0.9rem;
    color: var(--color-text-primary);
    font-weight: 600;
`;
