import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-dark-blue);
    text-align: center;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 1.5rem;
    color: var(--color-brightest-blue);
    text-shadow: 2px 2px var(--color-light-blue);
`;

export const Description = styled.p`
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
    color: var(--color-brightest-blue);
`;

export const HomeButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1.25rem;
    background-color: white;
    color: var(--color-dark-blue);
    border: 2px solid var(--color-dark-blue);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--color-brightest-blue);
        color: var(--color-dark-blue);
        transform: translateY(-3px);
    }
`;
