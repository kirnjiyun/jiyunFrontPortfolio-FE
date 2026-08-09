import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg);
    text-align: center;
    padding: 2rem;
    transition: background-color 0.3s ease;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-fg);
    letter-spacing: -0.03em;
`;

export const Description = styled.p`
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: var(--color-muted-fg);
`;

export const HomeButton = styled.button`
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
    border: 1px solid transparent;
    border-radius: var(--radius);
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.9;
    }
`;
